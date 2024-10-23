<template>
    <Modal :open="open">
        <div class="back-delete-modal">
            <div class="back-modal-text">
                <h1 class="back-modal-title">裏面を撮影しました</h1>
                <p class="back-modal-subtitle">※あとから撮り直せます</p>
            </div>
            <img class="back-modal-image" :src="takeSrc" alt="裏面の画像" />
            <div class="back-modal-btngroup">
                <Button class="back-modal-btn" error @click="cancelHandler">
                    登録しない
                </Button>
                <Button class="back-modal-btn" fill @click="toRegisterHandler">
                    読み取る
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { Buffer } from 'buffer';
import type { SavePhotosReqJson } from '~/models/dto/coupon_camera';

const props = defineProps<{
    open: boolean,
    takeSrc?: string,
}>();

const { fetcherHandler } = useFetcher();
const buffer_saver = useBufferSaver();

const cancelHandler = () => {
    buffer_saver.value = {} as SavePhotosReqJson;
    navigateTo('/coupons');
}

const toRegisterHandler = () => fetcherHandler(async()=>{
    if (!props.takeSrc) throw new Error('写真の撮影に失敗しました');
    const matches = props.takeSrc.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) throw new Error('写真のバイナリデータが不正です');
    const back_photo_buffer = Buffer.from(matches[2], 'base64');

    buffer_saver.value.photo_back_buffer = back_photo_buffer;
    navigateTo('/coupon/register');
});

onBeforeMount(() => {
    if (!buffer_saver.value.photo_front_buffer) {
        navigateTo('/coupon_camera/front');
    }
})

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