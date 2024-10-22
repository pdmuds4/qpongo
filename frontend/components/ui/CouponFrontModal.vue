<template>
    <Modal :open="open">
        <div class="front-delete-modal">
            <div class="front-modal-text">
                <h1 class="front-modal-title">表面を撮影しました</h1>
                <p class="front-modal-subtitle">裏面もありますか？</p>
            </div>
            <img class="front-modal-image" :src="takeSrc" alt="表面の画像" />
            <div class="front-modal-btngroup">
                <Button class="front-modal-btn" @click="saveHandler('/coupon/register')">
                    表面だけ
                </Button>
                <Button class="front-modal-btn" fill @click="saveHandler('/coupon_camera/back')">
                    裏面も撮る
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
// import { SavePhotosUseCase } from '~/models/usecase/coupon_camera';

import { Buffer } from 'buffer';
// import AwsS3Client from '~/models/client/awsS3';
// import UploadToS3Service from '~/models/service/uploadToS3';

const props = defineProps<{
    open: boolean,
    takeSrc?: string,
}>();

const fetcher = useFetcher().value;
const buffer_saver = useBufferSaver();
// const config = useRuntimeConfig();

// const client = new AwsS3Client(
//     config.public.awsRegion,
//     config.public.awsAccessKeyId,
//     config.public.awsSecretAccessKey,
//     config.public.awsS3Bucket
// );

const saveHandler = async (navigate_to: string) => {
    fetcher.loading = true;
    try {
        if (!props.takeSrc) throw new Error('写真の撮影に失敗しました');
        const matches = props.takeSrc.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) throw new Error('写真のバイナリデータが不正です');
        const front_photo_buffer = Buffer.from(matches[2], 'base64');

        // const request = new SavePhotosReqDTO(front_photo_buffer, null);
        // const response = await new SavePhotosUseCase(new UploadToS3Service(client), request).execute();
        
        buffer_saver.value.photo_front_buffer = front_photo_buffer
        navigateTo(navigate_to);
    } catch (e) {
        fetcher.error = true;
        fetcher.error_message = e instanceof Error ? e.message : 'エラーが発生しました';
    } finally {
        fetcher.loading = false;
    }
}

</script>

<style scoped>

.front-delete-modal {
    width: 60vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.front-modal-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.front-modal-btngroup {
    display: flex;
    gap: 20px;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
}

.front-modal-title {
    font-size: 24px;
    font-weight: bold;
}

.front-modal-subtitle {
    font-weight: bold;
}

.front-modal-image {
    width: 50%;
    border-radius: 15px;
    margin: 0 auto;
}

.front-modal-btn {
    width: 50%;
    padding: 5px 0;
}

@media screen and (max-width: 580px) {
    .front-camera-frame {
        width: 90vw;
        aspect-ratio: 1/1;
    }

    .front-delete-modal {
        width: 90vw;
    }

    .front-modal-title {
        font-size: 20px;
    }
    
    .front-modal-image {
        width: 70%;
    }

    .front-modal-btngroup {
        width: 100%;
    }
}

</style>