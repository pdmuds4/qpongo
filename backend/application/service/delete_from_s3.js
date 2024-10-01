const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

class DeleteFromS3Service {
    constructor(s3Client, url) {
        this.s3 = s3Client;
        this.url = url;
    }

    async execute() {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        const region = process.env.AWS_REGION;
        const key = this.url.value.replace(`https://${bucketName}.s3.${region}.amazonaws.com/`, '');
        const params = {
            Bucket: bucketName,
            Key: key
        };

        try {
            const command = new DeleteObjectCommand(params);
            await this.s3.send(command);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = DeleteFromS3Service;