<template>
    <div>
        <Accordion>
            <template #show-contents>
                <div class="coupon-show-contents">
                    <Chiptag status="alert" chip="あと0日" text="2020/12/31まで有効" />
                    <div class="coupon-info-contents">
                        <div class="coupon-info-text">
                            <h3 class="coupon-store-text">
                                クーポン発行店名
                            </h3>
                            <h1 class="coupon-discount-text">
                                割引内容
                            </h1>
                            <h4 class="coupon-goods-text">
                                対象商品
                            </h4>
                        </div>
                        <div class="coupon-photo">
                            <ToggleImage
                                frontImage="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                                backImage="https://thumb.photo-ac.com/9a/9a7f0b2c38647151d0d9ea27fa1afe70_t.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </template>
            <template #hidden-contents>
                <div class="coupon-edit-contents">
                    <Button class="coupon-edit-btn isuse">
                        使用済みにする
                    </Button>
                    <Button class="coupon-edit-btn delete" error>
                        削除
                    </Button>
                </div>
            </template>
        </Accordion>
        <Modal :open="false">
            <div class="coupon-delete-modal">
                <div class="coupon-modal-text">
                    <h1 class="coupon-modal-title">クーポンを削除しますか？</h1>
                    <p class="coupon-modal-subtitle">※この操作は戻せません</p>
                </div>
                <div class="coupon-modal-btngroup">
                    <Button class="coupon-modal-btn">
                        キャンセル
                    </Button>
                    <Button class="coupon-modal-btn" error>
                        削除
                    </Button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.coupon-show-contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.coupon-info-contents, .coupon-edit-contents{
    display: flex;
    gap: 10px;
    width: 100%;
}

.coupon-info-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.coupon-photo {
    width: 200px;
    margin-left: auto;
}

.coupon-discount-text {
    font-size: 36px;
    font-weight: bold;
}

.coupon-goods-text {
    font-size: 12px;
}

.coupon-edit-contents {
    max-width: 320px;
}

.coupon-edit-btn {
    width: 50%;
    padding: 5px 0;
}

.coupon-delete-modal {
    width: 60vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.coupon-modal-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.coupon-modal-btngroup {
    display: flex;
    gap: 20px;
    width: 70%;
    margin: 0 auto;
}

.coupon-modal-title {
    font-size: 24px;
    font-weight: bold;
}

.coupon-modal-subtitle {
    color: #E74C3C;
    font-weight: bold;
}

.coupon-modal-btn {
    width: 50%;
    padding: 5px 0;
}

@media screen and (max-width: 580px) {
    .coupon-info-contents {
        flex-direction: column;
    }

    .coupon-photo {
        margin: 0 auto;
    }

    .coupon-discount-text {
        font-size: 24px;
        font-weight: bold;
    }

    .coupon-goods-text {
        font-size: 12px;
    }

    .coupon-delete-modal {
        width: 90vw;
    }

    .coupon-modal-title {
        font-size: 20px;
    }

    .coupon-modal-btngroup {
        width: 100%;
    }
}

</style>