const {UserRegisterUseCase} = require('../application/usecase/user');
const {UserRepository} = require('../application/repository');
const {CreateNewIDService} = require('../application/service');
const dynamoDBDocumentClient = require('../client/aws/dynamodb');

const express = require('express');
const register = express.Router();

register.post('/', async(req, res) => {
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

    return res.send(user_registered);
});

module.exports = register;