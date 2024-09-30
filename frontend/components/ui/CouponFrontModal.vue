<template>
    <Modal :open="open">
        <div class="front-delete-modal">
            <div class="front-modal-text">
                <h1 class="front-modal-title">表面を撮影しました</h1>
                <p class="front-modal-subtitle">裏面もありますか？</p>
            </div>
            <img class="front-modal-image" :src="takeSrc" alt="表面の画像" />
            <div class="front-modal-btngroup">
                <Button class="front-modal-btn">
                    表面だけ
                </Button>
                <Button class="front-modal-btn" fill>
                    裏面も撮る
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