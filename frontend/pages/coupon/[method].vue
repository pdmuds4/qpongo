<template>
    <ProviderHomeContent :pageTitle="page_title">
        <div class="coupon-content">
            <div class="coupon-photos">
                <NuxtImg 
                    class="coupon-img"
                    alt="front"
                    :src="formValue.photo_front"
                />
                <NuxtImg 
                    v-if="formValue.photo_back !== formValue.photo_front"
                    class="coupon-img"
                    alt="back"
                    :src="formValue.photo_back"
                />
            </div>
            <Heading v-if="method=='register'" class="coupon-message">登録内容をご確認ください</Heading>
            <div class="coupon-card">
                <UiCouponInfoListItem title="有効期限">
                    <Calendar 
                        :default-value="formValue.deadline"
                        @change="(e) => formValue.deadline = new Date(e.target.value)"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="発行店名">
                    <TextField
                        inputType="text" 
                        placeHolder="ここに入力"
                        :default-value="formValue.store"
                        @change="(e) => formValue.store = e.target.value"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="割引内容">
                    <TextField 
                        inputType="text" 
                        placeHolder="ここに入力"
                        :defaultValue="formValue.discount"
                        @change="(e) => formValue.discount = e.target.value"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="対象商品">
                    <TextField 
                        inputType="text" 
                        placeHolder="ここに入力"
                        :defaultValue="formValue.goods"
                        @change="(e) => formValue.goods = e.target.value"
                    />
                </UiCouponInfoListItem>
            </div>
            <div class="coupon-btngroup">
                <Button 
                    class="coupon-btn" 
                    error 
                    @click="() => method==='register' ? toRetakeHandler() : navigateTo('/coupos')"
                >
                    {{method==='register' ? "撮り直す" : "キャンセル"}}
                </Button>
                <Button 
                    class="coupon-btn" 
                    fill
                    @click="registerHandler"
                >
                    {{method==='register' ? "登録する" : "更新する"  }}
                </Button>
            </div>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">
const route = useRoute();
const method = route.params.method as 'register' | 'edit';

const page_title = computed(() => {
    if (method === 'register') {
        return 'クーポン登録';
    } else if (method === 'edit') {
        return 'クーポン編集';
    } else {
        throw createError({
            statusCode: 404,
            message: "Not Found",
            fatal: true,
        });
    }
});


import { DeletePhotosUseCase, SavePhotosUseCase, TextExtractUseCase } from '~/models/usecase/coupon_camera';
import { DeletePhotosReqDTO, SavePhotosReqDTO, TextExtractReqDTO, type SavePhotosReqJson } from '~/models/dto/coupon_camera';
import type { CouponRegisterReqJson } from '~/models/dto/coupon_register/req_coupon_register';

import AwsS3Client from '~/models/client/awsS3';
import UploadToS3Service from '~/models/service/uploadToS3';

import CouponRegisterUseCase from '~/models/usecase/coupon/couponRegister';
import CouponRegisterReqDTO from '~/models/dto/coupon_register/req_coupon_register';
import Id from '~/models/value_object/id';
import { CouponDiscount, CouponGoods, CouponPhoto, CouponStore, CouponDeadline, CouponCategory } from '~/models/value_object/coupon';


const {fetcher, fetcherHandler} = useFetcher()
const buffer_saver = useBufferSaver();

const config = useRuntimeConfig();

const client = new AwsS3Client(
    config.public.awsRegion,
    config.public.awsAccessKeyId,
    config.public.awsSecretAccessKey,
    config.public.awsS3Bucket
);

const formValue = reactive<CouponRegisterReqJson>({} as CouponRegisterReqJson)

onBeforeMount(async ()=>{
    const auth_info = authManager.getToken()
    if (auth_info) formValue.user_id = auth_info.user_id;

    if (method == 'register' && buffer_saver.value.photo_front_buffer) {
        extractHandler();
    } else {
        navigateTo('/coupon_camera/front');
    }
})

const extractHandler = () => fetcherHandler(async () => {
    const save_photos_request = new SavePhotosReqDTO(buffer_saver.value.photo_front_buffer, buffer_saver.value.photo_back_buffer);
    const save_photos_response = await new SavePhotosUseCase(new UploadToS3Service(client, config.public.S3Base), save_photos_request).execute();
    formValue.photo_front = save_photos_response.photo_front.value;
    formValue.photo_back = save_photos_response.photo_back ? save_photos_response.photo_back.value : save_photos_response.photo_front.value;
    buffer_saver.value = {} as SavePhotosReqJson;

    const text_extract_request = new TextExtractReqDTO(
        save_photos_response.photo_front,
        save_photos_response.photo_back ? save_photos_response.photo_back : save_photos_response.photo_front
    );
    const text_extract_response = await new TextExtractUseCase(text_extract_request).execute();

    formValue.goods = text_extract_response.goods.value;
    formValue.discount = text_extract_response.discount.value;
    formValue.store = text_extract_response.store.value;
    formValue.deadline = text_extract_response.deadline.value;
    formValue.category = text_extract_response.category.value;
});


const toRetakeHandler = () => fetcherHandler(async () => {
    const delete_photos_request = new DeletePhotosReqDTO(
        new CouponPhoto(formValue.photo_front),
        new CouponPhoto(formValue.photo_back),
    );
    await new DeletePhotosUseCase(delete_photos_request).execute();
    navigateTo('/coupon_camera/front')
})

const registerHandler = () => fetcherHandler(async () => {
    const request = new CouponRegisterReqDTO(
        new Id            (formValue.user_id),
        new CouponGoods   (formValue.goods),
        new CouponDiscount(formValue.discount),
        new CouponStore   (formValue.store),
        new CouponDeadline(formValue.deadline),
        new CouponPhoto   (formValue.photo_front),
        new CouponPhoto   (formValue.photo_back),
        new CouponCategory(formValue.category)
    )
    const response = await new CouponRegisterUseCase(request).execute();
    if (!response.message) throw new Error('クーポンの登録に失敗しました');
    navigateTo('/coupons');
})

</script>

<style scoped>
.coupon-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.coupon-photos {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.coupon-img {
    max-width: 200px;
    width:45%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}

.coupon-message {
    text-align: center;
}

.coupon-card {
    background-color: white;
    border-radius: 10px;
    border: 3px solid #34495E;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.coupon-btngroup {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.coupon-btn {
    width: 40%;
}

@media screen and (max-width: 580px) {
    .coupon-message {
        font-size: 20px;
    }

    .coupon-card {
        padding: 10px;
    }

    .coupon-btn {
        width: 50%;
    }
}

</style>