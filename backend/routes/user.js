const {UserRegisterUseCase, UserGetInfoUseCase} = require('../application/usecase/user');
const {SettingsRegisterUseCase} = require('../application/usecase/setting');
const {UserRepository} = require('../application/repository');
const {SettingRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');

const express = require('express');
const user_route = express.Router();

user_route.get('/:user_id', async(req, res) => {
    const repository = new UserRepository(dynamoDBDocumentClient);
    const request_json = {"user_id": Number(req.params.user_id)}

    const user = new UserGetInfoUseCase(repository, request_json);
    const user_data = await user.execute();
    const user_json = user_data.toJson();
    return res.send(user_json);
});

user_route.post('/', async(req, res) => {
    const repository = new UserRepository(dynamoDBDocumentClient);

    const user_id = await new CreateNewIDService(dynamoDBDocumentClient, 'user', 'id').execute();
    const default_user_name = Math.random().toString(32).substring(2, 8)
    const default_gender = 'その他'
    const default_age = 20

    const user =  {
        id: user_id,
        name: default_user_name,
        password: req.body.password,
        e_mail: req.body.e_mail,
        gender: default_gender,
        age: default_age,
    }

    const user_register = new UserRegisterUseCase(repository, user);
    const user_registered = await user_register.execute();

    const setting_repository = new SettingRepository(dynamoDBDocumentClient);
    const default_notice = 7

    const setting = {
        user_id: user_id,
        notice: default_notice
    }

    const setting_register = new SettingsRegisterUseCase(setting_repository, setting);
    await setting_register.execute();

    return res.send(user_registered);
});

module.exports = user_route;