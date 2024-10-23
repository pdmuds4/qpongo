const {CouponPhotosDeleteUseCase, CouponTextExtractUseCase, CouponEditUseCase, CouponRegisterUseCase, CouponGetUserCouponsUseCase, CouponDeleteUseCase, CouponGetCouponsUseCase} = require('../application/usecase/coupon');
const {CouponRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');
const s3Client = require('../client/aws/s3');
const GPTAPIClient = require('../client/open_ai/gptapi');

const express = require('express');
const coupon_route = express.Router();
const photos_route = express.Router();

coupon_route.get('/:user_id', async(req, res) => {
    const repository = new CouponRepository(dynamoDBDocumentClient);
    const request_json = {"user_id": Number(req.params.user_id)}

    const user_coupons = new CouponGetUserCouponsUseCase(repository, request_json);
    const coupons = await user_coupons.execute();
    const coupons_json = coupons.map(coupon => coupon.toJson());
    return res.send(coupons_json);
});

coupon_route.get('/coupon/:coupon_id', async(req, res) => {
    const repository = new CouponRepository(dynamoDBDocumentClient);
    const request_json = {"coupon_id": Number(req.params.coupon_id)}

    const coupon = new CouponGetCouponsUseCase(repository, request_json);
    const get_coupon = await coupon.execute();
    const coupon_json = get_coupon.toJson();
    return res.send(coupon_json);
});

coupon_route.post('/', async(req, res) => {
    const repository = new CouponRepository(dynamoDBDocumentClient);

    const coupon_id = await new CreateNewIDService(dynamoDBDocumentClient, 'coupon', 'id').execute();
    const default_is_used = false

    const coupon =  {
        id: coupon_id,
        user_id: req.body.user_id,
        goods: req.body.goods,
        discount: req.body.discount,
        store: req.body.store,
        deadline: req.body.deadline,
        photo_front: req.body.photo_front,
        photo_back: req.body.photo_back,
        is_used: default_is_used,
        category: req.body.category
    }

    const coupon_register = new CouponRegisterUseCase(repository, coupon);
    const coupon_registered = await coupon_register.execute();
    return res.send(coupon_registered);
});

coupon_route.put('/', async(req, res) => {
    const repository = new CouponRepository(dynamoDBDocumentClient);

    const coupon = {
        id: req.body.id,
        user_id: req.body.user_id,
        goods: req.body.goods,
        discount: req.body.discount,
        store: req.body.store,
        deadline: req.body.deadline,
        photo_front: req.body.photo_front,
        photo_back: req.body.photo_back,
        is_used: req.body.is_used,
        category: req.body.category
    }

    const coupon_edit = new CouponEditUseCase(repository, coupon);
    const coupon_edited = await coupon_edit.execute();
    return res.send(coupon_edited);
});

coupon_route.delete('/', async(req, res) => {
    const repository = new CouponRepository(dynamoDBDocumentClient);
    const request_json = req.body

    const coupon_delete = new CouponDeleteUseCase(repository, request_json);
    const coupon_deleted = await coupon_delete.execute();
    return res.send(coupon_deleted);
});

photos_route.post('/', async(req, res) => {
    const client = GPTAPIClient
    const photos_url = req.body;
    const extract_text = new CouponTextExtractUseCase(client, photos_url);
    const extracted_text = await extract_text.execute();
    return res.send(extracted_text);
});

photos_route.delete('/', async(req, res) => {
    const client = s3Client
    const photos_url = req.body;
    const delete_photo = new CouponPhotosDeleteUseCase(client, photos_url);
    const deleted_photo = await delete_photo.execute();
    return res.send(deleted_photo);
});

module.exports = {coupon_route, photos_route};