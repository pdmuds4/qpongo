const {SettingGetUserUseCase, SettingUpdateSettingsUseCase} = require('../application/usecase/setting');
const {SettingRepository} = require('../application/repository');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');

const express = require('express');
const setting_route = express.Router();

setting_route.get('/:user_id', async(req, res) => {
    const repository = new SettingRepository(dynamoDBDocumentClient);
    const request_json = {"user_id": Number(req.params.user_id)}

    const setting = new SettingGetUserUseCase(repository, request_json);
    const setting_data = await setting.execute();
    const setting_json = setting_data.toJson();
    return res.send(setting_json);
});

module.exports = setting_route;