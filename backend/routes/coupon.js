const {CouponPhotosDeleteUseCase, CouponTextExtractUseCase, CouponEditUseCase, CouponRegisterUseCase, CouponGetUserCouponsUseCase, CouponDeleteUseCase} = require('../application/usecase/coupon');
const {CouponRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');
const s3Client = require('../client/aws/s3');

const express = require('express');
const coupon_route = express.Router();
const photos_route = express.Router();

photos_route.delete('/', async(req, res) => {
    const photos_url = req.body;
    const delete_photo = new CouponPhotosDeleteUseCase(s3Client, photos_url);
    const deleted_photo = await delete_photo.execute();
    return res.send(deleted_photo);
});

module.exports = {coupon_route, photos_route};