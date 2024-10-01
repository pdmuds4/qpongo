const s3Client = require('../../client/aws/s3');
const { DeleteObjectCommand } = require('@aws-sdk/client-s3');

class DeleteFromS3 {
    constructor() {
        this.s3Client = s3Client;
    }

    async deleteFileFromS3(url) {
        // オブジェクトURLを元にs3内のファイルを削除
        const bucketName = 'qpongo';
        const key = url.split('/').pop();
        const params = {
            Bucket: bucketName,
            Key: key
        };

        try {
            const command = new DeleteObjectCommand(params);
            await this.s3Client.send(command);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = DeleteFromS3;