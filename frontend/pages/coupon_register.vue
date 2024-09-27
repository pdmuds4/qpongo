<template>
    <ProviderDrawer>
        <div class="register-content">
            <Heading class="register-title">クーポン登録</Heading>
            <div class="register-photos">
                <NuxtImg 
                    class="register-img front"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
                <NuxtImg 
                    class="register-img back"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
            </div>
            <Heading class="register-message">登録内容をご確認ください</Heading>
            <div class="register-card">
                <CouponInfoListItem title="有効期限">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </CouponInfoListItem>
                <CouponInfoListItem title="発行店名">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </CouponInfoListItem>
                <CouponInfoListItem title="割引内容">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </CouponInfoListItem>
                <CouponInfoListItem title="対象商品">
                    <TextField inputType="text" placeHolder="ここに入力" />
                </CouponInfoListItem>
            </div>
            <div class="register-btngroup">
                <Button class="register-btn retake" error>撮り直す</Button>
                <Button class="register-btn register" fill>登録する</Button>
            </div>
        </div>
    </ProviderDrawer>
</template>

<script setup lang="ts">
import CouponInfoListItem from '~/components/ui/CouponInfoListItem.vue';



</script>

<style scoped>
.register-title {
    font-size: 28px;
}

.register-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.register-photos {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.register-img {
    max-width: 200px;
    width:45%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}

.register-message {
    text-align: center;
}

.register-card {
    background-color: white;
    border-radius: 10px;
    border: 3px solid #34495E;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.register-btngroup {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.register-btn {
    width: 40%;
    padding: 5px 0;
}

@media screen and (max-width: 580px) {
    .register-content {
        padding: 0px;
    }

    .register-message {
        font-size: 20px;
    }

    .register-card {
        padding: 10px;
    }

    .register-btn {
        width: 50%;
    }
}

</style>