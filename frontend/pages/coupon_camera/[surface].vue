<template>
    <div class="coupon-camera-body">
        <video ref="video" autoplay></video>
        <canvas ref="canvas" hidden></canvas>
        <div class="coupon-camera-cover-content">
            <h1 class="coupon-camera-heading">{{heading}}面を撮影します</h1>
            <div ref="frame" class="coupon-camera-frame"></div>
            <p class="coupon-camera-detail">※上の白い枠に収まるように撮影してください</p>
            <div class="coupon-camera-btn-wrapper">
                <button class="coupon-camera-btn" @click="takeCoupon"></button>
            </div>
        </div>
        <form hidden>
            <input type="file" name="coupon_photo" />
            <audio ref="shutter" src="/audio/camera-shutter.mp3"></audio>
        </form>
        <component :is="surface === 'front' ? FrontModal : BackModal" :open="modal_open" :takeSrc="photo_src" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const photo_src = ref<string|null>(null);
const modal_open = ref(false);

const FrontModal = resolveComponent('UiCouponFrontModal');
const BackModal = resolveComponent('UiCouponBackModal');
const surface = route.params.surface as 'front' | 'back';

const frame = useTemplateRef('frame');
const video = useTemplateRef('video');
const canvas = useTemplateRef('canvas');
const shutter = useTemplateRef('shutter');


// URLによる動的パスに対するハンドリング //
const heading = computed(() => {
    if (surface === 'front') {
        return '表';
    } else if (surface === 'back') {
        return '裏';
    } else {
        throw createError({
            statusCode: 404,
            message: "Not Found",
            fatal: true,
        });
    }
});


// カメラの開始
const startCamera = () => 
navigator.mediaDevices.getUserMedia(
{
    video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 },
        facingMode: "environment",
    },
    audio: false,
}).then(stream => {
    if (video.value) video.value.srcObject = stream;
}).catch(e => {
    console.log(e)
});

onMounted(() => {
    startCamera();
})



// 写真の撮影
const capturePhoto = () => {
    if (canvas.value && video.value && frame.value) {
        const context = canvas.value.getContext('2d') as CanvasRenderingContext2D;
        canvas.value.width = video.value.videoWidth
        canvas.value.height = video.value.videoHeight
        context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height)
        
        const cropX      = frame.value.getBoundingClientRect().left;
        const cropY      = frame.value.getBoundingClientRect().top;
        const cropWidth  = frame.value.offsetWidth;
        const cropHeight = frame.value.offsetHeight;

        // 切り取った部分を新しいキャンバスに描画
        const croppedCanvas = document.createElement('canvas')
        croppedCanvas.width = cropWidth
        croppedCanvas.height = cropHeight
        const croppedContext = croppedCanvas.getContext('2d') as CanvasRenderingContext2D;
        
        croppedContext.drawImage(
            canvas.value,
            cropX, cropY, cropWidth, cropHeight, // 元画像の切り取る位置とサイズ
            0, 0, cropWidth, cropHeight // 新しいキャンバス上での描画位置とサイズ
        )

        // 切り取った画像をbase64形式に変換して表示
        photo_src.value = croppedCanvas.toDataURL('image/png')
    }
}


const takeCoupon = () => {
    if(shutter.value) shutter.value.play();
    capturePhoto();
    modal_open.value = !modal_open.value;
};

</script>

<style scoped>
.coupon-camera-body {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.coupon-camera-cover-content {
    position: fixed;
    width: 100vw;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.coupon-camera-heading {
    font-size: 24px;
    font-weight: bold;
}

.coupon-camera-detail {
    font-size: 12px;
}

.coupon-camera-frame {
    border: 3px solid white;
    width: 50vw;
    aspect-ratio: 4/3;
    max-width: 500px;
    border-radius: 15px;
    mix-blend-mode: difference;
}

.coupon-camera-btn-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    bottom: 0px;
    margin-top: 10px;
    border: 3px solid white;
    padding: 3px;
}

.coupon-camera-btn {
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: 0.3s;
} .coupon-camera-btn:hover {
    opacity: 0.8;
} .coupon-camera-btn:active {
    transform: scale(0.90);
}

@media screen and (max-width: 580px) {
    .coupon-camera-frame {
        width: 90vw;
        aspect-ratio: 1/1;
    }
}

</style>