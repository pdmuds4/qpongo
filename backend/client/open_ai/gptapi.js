require('dotenv').config();
const {OpenAI} = require("openai");

const GPTAPIClient = new OpenAI ({
    apiKey: process.env.OPENAI_API_KEY_QPONGO
});

module.exports = GPTAPIClient;