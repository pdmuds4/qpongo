<template>
    <ProviderHomeContent pageTitle="クーポン編集">
        <div class="edit-content">
            <div class="edit-photos">
                <NuxtImg 
                    class="edit-img front"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
                <NuxtImg 
                    class="edit-img back"
                    src="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                />
            </div>
            <div class="edit-card">
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
            <div class="edit-btngroup">
                <Button class="edit-btn cancel" error>キャンセル</Button>
                <Button class="edit-btn update"  fill>更新する</Button>
            </div>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">
</script>

<style scoped>
.edit-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.edit-photos {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.edit-img {
    max-width: 200px;
    width:45%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}

.edit-message {
    text-align: center;
}

.edit-card {
    background-color: white;
    border-radius: 10px;
    border: 3px solid #34495E;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.edit-btngroup {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.edit-btn {
    width: 40%;
}

@media screen and (max-width: 580px) {
    .edit-message {
        font-size: 20px;
    }

    .edit-card {
        padding: 10px;
    }

    .edit-btn {
        width: 50%;
    }
}

</style>