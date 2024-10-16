const {PhotoValueObject} = require('../../../domain/value_object/coupon');
require('dotenv').config();

class CouponPhotosDeleteUseCase {
    constructor(client, request) {
        this.client = client;
        this.request = request;
    }

    async execute() {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        const region = process.env.AWS_REGION;

        for (const photo_key in this.request) {
            const url = new PhotoValueObject(this.request[photo_key]);
            const key = url.value.replace(`https://${bucketName}.s3.${region}.amazonaws.com/`, '');
            const params = {
                Bucket: bucketName,
                Key: key
            };

            try {
                const command = new DeleteObjectCommand(params);
                await this.client.send(command);
                return '写真を削除しました。'
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}

module.exports = CouponPhotosDeleteUseCase;