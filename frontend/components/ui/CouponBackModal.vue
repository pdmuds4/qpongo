<template>
    <Modal :open="open">
        <div class="back-delete-modal">
            <div class="back-modal-text">
                <h1 class="back-modal-title">裏面を撮影しました</h1>
                <p class="back-modal-subtitle">※あとから撮り直せます</p>
            </div>
            <img class="back-modal-image" :src="takeSrc" alt="裏面の画像" />
            <div class="back-modal-btngroup">
                <Button class="back-modal-btn" error @click="navigateTo('/coupons')">
                    登録しない
                </Button>
                <Button class="back-modal-btn" fill @click="navigateTo('/coupon/register')">
                    読み取る
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
defineProps<{
    open: boolean,
    takeSrc?: string,
}>();
</script>

<style scoped>

.back-delete-modal {
    width: 60vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.back-modal-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.back-modal-btngroup {
    display: flex;
    gap: 20px;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
}

.back-modal-title {
    font-size: 24px;
    font-weight: bold;
}

.back-modal-subtitle {
    font-weight: bold;
}

.back-modal-image {
    width: 50%;
    border-radius: 15px;
    margin: 0 auto;
}

.back-modal-btn {
    width: 50%;
    padding: 5px 0;
}

@media screen and (max-width: 580px) {
    .back-camera-frame {
        width: 90vw;
        aspect-ratio: 1/1;
    }

    .back-delete-modal {
        width: 90vw;
    }

    .back-modal-title {
        font-size: 20px;
    }
    
    .back-modal-image {
        width: 70%;
    }

    .back-modal-btngroup {
        width: 100%;
    }
}

</style>