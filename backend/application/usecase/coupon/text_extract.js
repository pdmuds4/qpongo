const {PhotoValueObject} = require('../../../domain/value_object/coupon');

class CouponTextExtractUseCase {
    constructor(client, request) {
        this.client = client;
        this.request = request;
    }

    async execute() {
        const photo_front = new PhotoValueObject(this.request.photo_front);
        const photo_back = new PhotoValueObject(this.request.photo_back);

        try {
            const completion = await this.client.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: 'Get the coupon data from the two photos.'
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    'url': `${photo_front.value}`
                                }
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    'url': `${photo_back.value}`
                                }
                            }
                        ]
                    },
                    {
                        role: 'system',
                        content: [
                            {
                                type: 'text',
                                text: 'We always send two photographs.'
                            },
                            {
                                type: 'text',
                                text: 'There are two types of photos: one front and one back.'
                            },
                            {
                                type: 'text',
                                text: 'If only the front photo is sent, two identical photos will be sent.'
                            },
                            {
                                type: 'text',
                                text: 'If the photo is front and back, send one front and one back.'
                            }
                        ]
                    }
                ],
                response_format: {
                    type: "json_schema",
                    json_schema: {
                        name: "coupon_data_schema",
                        schema: {
                            type: "object",
                            properties: {
                                goods: {
                                    description: "The product name",
                                    type: "string"
                                },
                                discount: {
                                    description: "Discount details",
                                    type: "string"
                                },
                                store: {
                                    description: "Store name",
                                    type: "string"
                                },
                                deadline: {
                                    description: "Expiration date in ISO 8601 format",
                                    type: "string",
                                    format: "date-time"
                                },
                                category: {
                                    description: "Category (one of: 飲食, ファッション, イベント, 旅行, ホビー・エンターテイメント, 健康・美容, その他)",
                                    type: "string",
                                    enum: ["飲食", "ファッション", "イベント", "旅行", "ホビー・エンターテイメント", "健康・美容", "その他"]
                                }
                            },
                            required: ["goods", "discount", "store", "deadline", "category"],
                            additionalProperties: false
                        }
                    }
                }                
            });

            const data = completion.choices[0].message.content;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = CouponTextExtractUseCase;