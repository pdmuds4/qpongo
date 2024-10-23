require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
    region: process.env.AWS_REGION_QPONGO,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_QPONGO,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_QPONGO
    }
});

module.exports = s3Client;