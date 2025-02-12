const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

class CreateNewIDService {
    constructor(dynamoDBDocumentClient, table_name, partition_key_name) {
        this.dynamoDB = dynamoDBDocumentClient;
        this.table_name = table_name;
        this.partition_key_name = partition_key_name;
    }

    async execute() {
        const params = {
            TableName: this.table_name,
            ProjectionExpression: this.partition_key_name
        };

        try {
            const data = await this.dynamoDB.send(new ScanCommand(params));
            const partition_keys = data.Items.map(item => item[this.partition_key_name]);
            let new_id = 0;
            if (partition_keys.length === 0) {
                new_id = 1;
            } else {
                const last_id = Math.max(...partition_keys);
                new_id = last_id + 1;
            }
            return new_id;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = CreateNewIDService;
