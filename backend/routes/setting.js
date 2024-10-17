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

setting_route.put('/', async(req, res) => {
    const repository = new SettingRepository(dynamoDBDocumentClient);

    const setting = {
        user_id: req.body.user_id,
        notice: req.body.notice
    }

    const setting_update = new SettingUpdateSettingsUseCase(repository, setting);
    const setting_updated = await setting_update.execute();
    return res.send(setting_updated);
});

module.exports = setting_route;