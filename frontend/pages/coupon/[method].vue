<template>
    <ProviderHomeContent :pageTitle="page_title">
        <div class="coupon-content">
            <div class="coupon-photos">
                <NuxtImg 
                    class="coupon-img"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
                <NuxtImg 
                    class="coupon-img"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
            </div>
            <Heading v-if="method=='register'" class="coupon-message">登録内容をご確認ください</Heading>
            <div class="coupon-card">
                <UiCouponInfoListItem title="有効期限">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="発行店名">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="割引内容">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </UiCouponInfoListItem>
                <UiCouponInfoListItem title="対象商品">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </UiCouponInfoListItem>
            </div>
            <div class="coupon-btngroup">
                <Button class="coupon-btn" error>{{method==='register' ? "撮り直す" : "キャンセル"}}</Button>
                <Button class="coupon-btn" fill >{{method==='register' ? "登録する" : "更新する"  }}</Button>
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