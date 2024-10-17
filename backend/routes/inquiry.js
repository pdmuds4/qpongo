const {InquiryUseCase} = require('../application/usecase/inquiry');
const {InquiryRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');

const express = require('express');
const inquiry_route = express.Router();

inquiry_route.post('/', async(req, res) => {
    const repository = new InquiryRepository(dynamoDBDocumentClient);

    const inquiry_id = await new CreateNewIDService(dynamoDBDocumentClient, 'inquiry', 'id').execute();
    const is_support = false
    const japan_time = new Date().toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});

    const inquiry =  {
        id: inquiry_id,
        sender: req.body.sender,
        is_support: is_support,
        e_mail: req.body.e_mail,
        content: req.body.content,
        sending_date: new Date(japan_time)
    }

    const inquiry_register = new InquiryUseCase(repository, inquiry);
    const inquiry_registered = await inquiry_register.execute();
    return res.send(inquiry_registered);
});

module.exports = inquiry_route;