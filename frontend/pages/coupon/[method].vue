<template>
    <ProviderHomeContent :pageTitle="page_title">
        <div class="coupon-content">
            <div class="coupon-photos">
                <NuxtImg 
                    class="coupon-img"
                    alt="front"
                    :src="registerFormValue.photo_front || editFormValue.photo_front"
                />
                <NuxtImg 
                    v-if="registerFormValue.photo_back !== registerFormValue.photo_front || editFormValue.photo_back !== editFormValue.photo_front"
                    class="coupon-img"
                    alt="back"
                    :src="registerFormValue.photo_back || editFormValue.photo_back"
                />
            </div>
            <Heading v-if="method=='register'" class="coupon-message">登録内容をご確認ください</Heading>
            <div class="coupon-card">
                <UiCouponInfoListItem title="有効期限">
                    <Calendar 
                        :defaultValue="registerFormValue.deadline || editFormValue.deadline"
                        @change="(e) => {
                            if(method=='register') registerFormValue.deadline = new Date(e.target.value)
                            if(method=='edit')     editFormValue.deadline     = new Date(e.target.value)
                        }"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="発行店名">
                    <TextField
                        inputType="text" 
                        placeHolder="ここに入力"
                        :defaultValue="registerFormValue.store || editFormValue.store"
                        @change="(e) => {
                            if(method=='register') registerFormValue.store = e.target.value
                            if(method=='edit')     editFormValue.store     = e.target.value
                        }"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="割引内容">
                    <TextField 
                        inputType="text" 
                        placeHolder="ここに入力"
                        :defaultValue="registerFormValue.discount || editFormValue.discount"
                        @change="(e) => {
                            if(method=='register') registerFormValue.discount = e.target.value
                            if(method=='edit')     editFormValue.discount     = e.target.value
                        }"
                    />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="対象商品">
                    <TextField 
                        inputType="text" 
                        placeHolder="ここに入力"
                        :defaultValue="registerFormValue.goods || editFormValue.goods"
                        @change="(e) => {
                            if(method=='register') registerFormValue.goods = e.target.value
                            if(method=='edit')     editFormValue.goods     = e.target.value
                        }"
                    />
                </UiCouponInfoListItem>
            </div>
            <div class="coupon-btngroup">
                <Button 
                    class="coupon-btn" 
                    error 
                    @click="() => method == 'register' ? toRetakeHandler() : navigateTo('/coupos')"
                >
                    {{method==='register' ? "撮り直す" : "キャンセル"}}
                </Button>
                <Button 
                    class="coupon-btn" 
                    fill
                    @click="() => method == 'register' ? registerHandler() : editHandler()"
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

import AwsS3Client from '~/models/client/awsS3';
import UploadToS3Service from '~/models/service/uploadToS3';

import { CouponRegisterUseCase, GetCouponUseCase, CouponEditUseCase } from '~/models/usecase/coupon';
import { CouponRegisterReqDTO, GetCouponReqDTO, CouponEditReqDTO, type CouponEditReqJson, type CouponRegisterReqJson } from '~/models/dto/coupon';

import Id from '~/models/value_object/id';
import { CouponDiscount, CouponGoods, CouponPhoto, CouponStore, CouponDeadline, CouponCategory } from '~/models/value_object/coupon';
import CreateDate from '~/models/value_object/create_date';

const {fetcherHandler} = useFetcher()
const buffer_saver = useBufferSaver();

const config = useRuntimeConfig();

const client = new AwsS3Client(
    config.public.awsRegion,
    config.public.awsAccessKeyId,
    config.public.awsSecretAccessKey,
    config.public.awsS3Bucket
);

const registerFormValue = reactive<CouponRegisterReqJson>({} as CouponRegisterReqJson)
const editFormValue = reactive<CouponEditReqJson>({} as CouponEditReqJson)

onBeforeMount(async ()=>{
    const auth_info = authManager.getToken()
    if (auth_info) {
        registerFormValue.user_id = auth_info.user_id
        editFormValue.user_id = auth_info.user_id
    };
    
    if (method == 'register') {
        buffer_saver.value.photo_front_buffer ? extractHandler() : navigateTo('/coupon_camera/front');
    } else if (method == 'edit') {
        getHandler();
    }
})

// ### /register handlers ### //
const extractHandler = () => fetcherHandler(async () => {
    const save_photos_request = new SavePhotosReqDTO(buffer_saver.value.photo_front_buffer, buffer_saver.value.photo_back_buffer);
    const save_photos_response = await new SavePhotosUseCase(new UploadToS3Service(client, config.public.S3Base), save_photos_request).execute();
    registerFormValue.photo_front = save_photos_response.photo_front.value;
    registerFormValue.photo_back = save_photos_response.photo_back ? save_photos_response.photo_back.value : save_photos_response.photo_front.value;
    buffer_saver.value = {} as SavePhotosReqJson;

    const text_extract_request = new TextExtractReqDTO(
        save_photos_response.photo_front,
        save_photos_response.photo_back ? save_photos_response.photo_back : save_photos_response.photo_front
    );
    const text_extract_response = await new TextExtractUseCase(text_extract_request).execute();

    registerFormValue.goods = text_extract_response.goods.value;
    registerFormValue.discount = text_extract_response.discount.value;
    registerFormValue.store = text_extract_response.store.value;
    registerFormValue.deadline = text_extract_response.deadline.value;
    registerFormValue.category = text_extract_response.category.value;
});


const toRetakeHandler = () => fetcherHandler(async () => {
    const delete_photos_request = new DeletePhotosReqDTO(
        new CouponPhoto(registerFormValue.photo_front),
        new CouponPhoto(registerFormValue.photo_back),
    );
    await new DeletePhotosUseCase(delete_photos_request).execute();
    navigateTo('/coupon_camera/front')
})

const registerHandler = () => fetcherHandler(async () => {
    const request = new CouponRegisterReqDTO(
        new Id            (registerFormValue.user_id),
        new CouponGoods   (registerFormValue.goods),
        new CouponDiscount(registerFormValue.discount),
        new CouponStore   (registerFormValue.store),
        new CouponDeadline(registerFormValue.deadline),
        new CouponPhoto   (registerFormValue.photo_front),
        new CouponPhoto   (registerFormValue.photo_back),
        new CouponCategory(registerFormValue.category)
    )
    const response = await new CouponRegisterUseCase(request).execute();
    if (!response.message) throw new Error('クーポンの登録に失敗しました');
    navigateTo('/coupons');
})


// ### /editor handlers ### //
const getHandler = () => fetcherHandler(async()=>{
    const query = route.query as { id: string };
    if (!query.id) navigateTo('/coupons');

    const request = new GetCouponReqDTO(new Id(parseInt(query.id)));
    const response = await new GetCouponUseCase(request).execute();

    if (!response) throw new Error('クーポンの取得に失敗しました');

    editFormValue.id = response.id.value;
    editFormValue.goods = response.goods.value;
    editFormValue.discount = response.discount.value;
    editFormValue.store = response.store.value;
    editFormValue.deadline = response.deadline.value;
    editFormValue.photo_front = response.photo_front.value;
    editFormValue.photo_back = response.photo_back.value;
    editFormValue.is_used = response.is_used;
    editFormValue.category = response.category.value;
    editFormValue.create_date = response.create_date.value;
})

const editHandler = () => fetcherHandler(async () => {
    const request = new CouponEditReqDTO(
        new Id            (editFormValue.id),
        new Id            (editFormValue.user_id),
        new CouponGoods   (editFormValue.goods),
        new CouponDiscount(editFormValue.discount),
        new CouponStore   (editFormValue.store),
        new CouponDeadline(editFormValue.deadline),
        new CouponPhoto   (editFormValue.photo_front),
        new CouponPhoto   (editFormValue.photo_back),
        editFormValue.is_used,
        new CouponCategory(editFormValue.category),
        new CreateDate   (editFormValue.create_date)

    )
    const response = await new CouponEditUseCase(request).execute();
    if (!response.message) throw new Error('クーポンの更新に失敗しました');
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