import { PutObjectCommand } from "@aws-sdk/client-s3";
import type AbsService from "~/models/_abstruct/service";
import AwsS3Client from "~/models/client/awsS3";
import ServiceError from "./service_error";

export default class UploadToS3Service implements AbsService<string>{
    client: AwsS3Client;
    s3_baseurl: string;

    constructor(
        client: AwsS3Client,
        s3_baseurl: string
    ){
        this.client = client;
        this.s3_baseurl = s3_baseurl;
    }

    async execute(file_buffer: Buffer){
        try {
            const filename = `${Date.now()}.png`;
            const command = new PutObjectCommand({
                Bucket: this.client.bucketName,
                Key:    filename,
                Body:   file_buffer,
            });

            await this.client.send(command);
            return `${this.s3_baseurl}/${filename}`;
        } catch (error) {
            if (error instanceof Error) {
                throw new ServiceError(error.message, 500)
            } else {
                throw new ServiceError("不明なエラー", 500);
            }
        }
    }
}