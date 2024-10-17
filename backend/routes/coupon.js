const {CouponPhotosDeleteUseCase, CouponTextExtractUseCase, CouponEditUseCase, CouponRegisterUseCase, CouponGetUserCouponsUseCase, CouponDeleteUseCase} = require('../application/usecase/coupon');
const {CouponRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');
const s3Client = require('../client/aws/s3');
const GPTAPIClient = require('../client/open_ai/gptapi');

const express = require('express');
const coupon_route = express.Router();
const photos_route = express.Router();

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