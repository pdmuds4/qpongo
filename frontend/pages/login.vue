<template>
    <div class="login-main">
        <Header setBtn="login" />
        <div class="login-body">
            <div class="login-section left">
                <Heading class="login-title">ログイン</Heading>
                <form class="login-form-body">
                    <TextField
                        class="login-form"
                        inputType="email"
                        defaultValue=""
                        placeHolder="メールアドレス" 
                    />
                    <TextField
                        class="login-form"
                        inputType="password"
                        defaultValue=""
                        placeHolder="パスワード" 
                    />
                    <Button class="login-form-submit">
                        ログイン
                    </Button>
                </form>
                <div class="login-to-register">
                    <p>まだアカウントをお持ちでない方</p>
                    <button class="login-to-register-btn" fill @click="navigateTo('/register')">
                        アカウント登録
                    </button>
                </div>
            </div>
            <div class="login-section right">
                <NuxtImg class="login-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login-body {
    display: flex;
    gap: 20px;
    padding-top: 70px;
    width: 100%;
}

.login-section {
    width: 50%;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    background-color: #FFF5C1;
}

.left {
    flex-direction: column;
    display: flex;
    justify-content: center;
}

.login-title {
    text-align: center;
}

.login-form-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.login-form {
    display: flex;
    flex-direction: column;
    padding: 0 36%;
}

.login-form-submit {
    width: 50%;
    margin: 0 auto;
}

.login-to-register {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.login-to-register-btn {
    width: 50%;
    margin: 0 auto;
    background-color: #ffffff;
    color: #34495e;
    padding: 10px 0;
    border-radius: 5px;
    cursor: pointer;
}

@media screen and (max-width: 580px) {
    .left {
        width: 100%;
    }

    .right {
        display: none;
    }

    .login-form {
        padding: 0 20px;
    }
}

</style>