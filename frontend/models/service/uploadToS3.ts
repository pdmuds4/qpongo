import { PutObjectCommand } from "@aws-sdk/client-s3";
import type AbsService from "~/models/_abstruct/service";
import AwsS3Client from "~/models/client/awsS3";
import ServiceError from "./service_error";

export default class UploadToS3Service implements AbsService<string>{
    client: AwsS3Client;
    file_buffer: Buffer;
    save_path: string;

    constructor(
        client: AwsS3Client,
        file_buffer: Buffer,
        save_path: string
    ){
        this.client = client;
        this.file_buffer = file_buffer;
        this.save_path = save_path;
    }

    async execute() {
        try {
            const command = new PutObjectCommand({
                Bucket: this.client.bucketName,
                Key:    this.save_path,
                Body:   this.file_buffer,
            });

            await this.client.send(command);
            return `https://${this.client.bucketName}.s3.${this.client.region}.amazonaws.com/${this.save_path}`;
        } catch (error) {
            if (error instanceof Error) throw new ServiceError(error.message, 500);
        }
    }
}