<!-- 
    # オリジナルデザイン - ヘッダー
    
    @props {'login'|'register'} setBtn (optional) - ボタングループの表示(default: 両方, login: ログインのみ, register: 新規登録のみ)
    ---
-->

<template>
    <header class="header-body">
        <NuxtLink class="header-bar" to="/">
            <NuxtImg class="header-logo" src="/img/logo.svg" />
            <h1 class="header-title">qpON→GO!</h1>
        </NuxtLink>

        <!-- setBtn propsがない場合 -->
        <div class="header-btn-group" v-if="!setBtn">
            <Button class="header-slot-btn">
                新規登録
            </Button>
            <Button class="header-slot-btn" fill>
                ログイン
            </Button>
        </div>

        <!-- setBtn propsがある場合 -->
        <div class="header-btn-group" v-else>
            <Button class="header-slot-btn" v-if="setBtn === 'register'">
                アカウント登録こちら→
            </Button>
            <Button class="header-slot-btn" v-if="setBtn === 'login'" fill>
                ログインはこちら→
            </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    setBtn?: 'login' | 'register'
}>();
</script>

<style scoped>
.header-body {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    box-shadow: 0px 5px 5px 0px rgb(116, 116, 116);
    background-color: white;
}

.header-bar {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
} .header-bar:active {
    background-color: #e5e5e5;
}

.header-logo {
    width: 60px;
    height: 60px;
}

.header-title {
    font-size: 30px;
    color: #34495E;
    padding: 0px 5px;
    margin: 0px 1px;
}

.header-btn-group {
    padding: 5px 20px 5px 0px;
    display: flex;
    align-items: center;
    margin-left: auto;
}

/* slot */
.header-slot-btn {
    font-size: 15px;
    padding: 5px 30px;
    margin: 0px 1vw
}

@media screen and (max-width: 580px) {
    .header-bar {
        padding: 1vh 1vw;
    }

    .header-logo {
        padding: 0px 0.7vw;
        width: 9vw;
        height:9vw;
    }

    .header-title {
        font-size: 5vw;
        padding: 0px 0.7vw;
        margin: 0px 0.1vh;
    }

    .header-btn-group {
        padding: 1vh 1.7vw;
    }

    /* slot */
    .header-slot-btn {
        font-size: 2vh;
        padding: 0.7vh 4vw;
    }
}
</style>