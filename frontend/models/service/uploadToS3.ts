import { PutObjectCommand } from "@aws-sdk/client-s3";
import type AbsService from "~/models/_abstruct/service";
import AwsS3Client from "~/models/client/awsS3";
import ServiceError from "./service_error";

export default class UploadToS3Service implements AbsService<string>{
    client: AwsS3Client;

    constructor(
        client: AwsS3Client,
    ){
        this.client = client;
    }

    async execute(file_buffer: Buffer){
        try {
            const save_path = `${Date.now()}.png`;
            const command = new PutObjectCommand({
                Bucket: this.client.bucketName,
                Key:    save_path,
                Body:   file_buffer,
            });

            await this.client.send(command);
            return `/source/${save_path}`;
        } catch (error) {
            if (error instanceof Error) {
                throw new ServiceError(error.message, 500)
            } else {
                throw new ServiceError("不明なエラー", 500);
            }
        }
    }
}