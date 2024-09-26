<!-- 
    # オリジナルデザイン - トグルイメージ

    @props {string} frontImage - 表側の画像のパス
    @props {string} backImage - 裏側の画像のパス
    
    ---
    [ 使用例 ]
    <ToggleImage 
        frontImage="https://media.discordapp.net/attachments/1129350851375398943/1134699343706869850/IMG_4206.jpg?ex=66f38d1d&is=66f23b9d&hm=009ce327c5ef6cb2f5752f5bff37f9a8cb832633f23fd8895ff0730fe8c5c898&=&format=webp&width=1344&height=1008"
        backImage="https://media.discordapp.net/attachments/1129350851375398943/1134699344117891112/IMG_4207.jpg?ex=66f38d1d&is=66f23b9d&hm=ea678515c517d308943d15bec2ee73ac4a1db61556064568f0f4174a155de6c2&=&format=webp&width=1344&height=1008"
    />
-->

<template>
    <div class="toggleimage-body" :class="{'is-back': imgIsBack}">
        <div class="toggleimage-back">
            <NuxtImg class="toggleimage-image" :src="backImage" />
        </div>
        <div class="toggleimage-front">
            <NuxtImg class="toggleimage-image" :src="frontImage" />
        </div>
        <button class="toggleimage-btn" @click="toggleImage">
            <NuxtImg class="toggleimage-btn-icon" src="img/components/ToggleImage/toggleimage-turn.svg" />
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    frontImage: string,
    backImage: string
}>()

const imgIsBack = ref(false);
const toggleImage = () => {
    imgIsBack.value = !imgIsBack.value;
}

</script>

<style scoped>
.toggleimage-body {
    position: relative;
}

.toggleimage-body::before {
    content: "";
    display: block;
}

.toggleimage-body .toggleimage-front,
.toggleimage-body .toggleimage-back {
    transition: all 0.3s;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
}

.toggleimage-body .toggleimage-back {
    transform: rotateY(-180deg);
}


.toggleimage-image {
    border-radius: 10%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.toggleimage-body.is-back .toggleimage-back {
    transform: rotateY(0deg);
}

.toggleimage-body.is-back .toggleimage-front {
    transform: rotateY(180deg);
}


.toggleimage-btn {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #34495E;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
} .toggleimage-btn:hover {
    background-color: #c9c9c9;
    transition: 0.1s;
}

.toggleimage-btn-icon {
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
}


</style>