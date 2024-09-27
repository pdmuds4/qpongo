<!-- 
    # オリジナルデザイン - ボトムバー(iPhone)

    ---
    [ 使用例 ]
    <BottomBar />
-->

<template>
    <div class="bottombar-body">
        <div class="bottombar-content left">
            <NuxtLink class="bottombar-item" to="/">
                <NuxtImg class="bottombar-item-img" src="img/components/SideBar/coupon-list.svg" />
                <span class="bottomber-item-text">クーポン一覧</span>
            </NuxtLink>
        </div>
        <div class="bottombar-content focus">
            <NuxtLink class="bottombar-btn" to="/">
                <NuxtImg class="bottombar-focus-img" src="img/components/BottomBar/coupon-register.svg" />
                <span class="bottomber-item-text">クーポン登録</span>
            </NuxtLink>
        </div>
        <div class="bottombar-content right">
            <NuxtLink class="bottombar-item" to="/">
                <NuxtImg class="bottombar-item-img" src="img/components/SideBar/setting.svg" />
                <span class="bottomber-item-text">設定</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bottombar-body {
    color: #34495E;
    background-color: white;
    font-weight: bold;
    position: fixed;
    display: flex;
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 12vh;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.bottombar-content {
    height: 12vh;
    flex-direction: row;
    display: flex;
}

.left, .right{
    width: 36vw;
}

.focus {
    width: 28vw;
    position: relative;
    justify-content: center;
    align-items: center;
}

.bottombar-item {
    padding: 1vh 3vh;
    margin: auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    color: #34495E;
} .bottombar-item:hover {
    cursor: pointer;
} .bottombar-item:active {
    background-color: #e5e5e5;
}

.bottombar-btn {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: -4vh;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background-color: #34495E;
    color: white;
    text-align: center;
    text-decoration: none;
    color: white;
    z-index: 1001;
} .bottombar-btn:hover {
    cursor: pointer;
} .bottombar-btn:active {
    background-color: #253441;
}

.bottombar-item-img {
    width: 7vh;
    margin: auto;
}

.bottombar-focus-img {
    margin: 2vh auto 0 auto;
    width: 9vh;
}

.bottomber-item-text {
    font-size: 1.5vh;
    margin-bottom: auto;
}

</style>