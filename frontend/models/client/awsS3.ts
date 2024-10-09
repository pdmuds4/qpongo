import { S3Client } from "@aws-sdk/client-s3";

export default class AwsS3Client extends S3Client {
    readonly region: string;
    readonly bucketName: string;

    constructor(
        region: string,
        accessKeyId: string,
        secretAccessKey: string,
        bucketName: string
    ) {
        super({
            region: region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
            },
        })

        this.region = region;
        this.bucketName = bucketName;
    }
}