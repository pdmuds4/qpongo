require('dotenv').config();
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const dynamoDBClient = new DynamoDBClient({
    region: process.env.AWS_REGION_QPONGO,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_QPONGO,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_QPONGO
    }
});

const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

module.exports = dynamoDBDocumentClient;