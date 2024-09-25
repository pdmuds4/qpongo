<template>
    <div class="register-main">
        <Header setBtn="register" />
        <div class="register-body">
            <div class="register-section left">
                <form class="register-form-body">
                    <TextField
                        class="register-form"
                        inputType="email"
                        defaultValue=""
                        placeHolder="メールアドレス" 
                    />
                    <TextField
                        class="register-form"
                        inputType="email"
                        defaultValue=""
                        placeHolder="メールアドレス（確認用）" 
                    />
                    <TextField
                        class="register-form"
                        inputType="password"
                        defaultValue=""
                        placeHolder="パスワード" 
                    />
                    <Button class="register-form-submit">
                        アカウント登録
                    </Button>
                </form>
                <div class="register-to-login">
                    <p>アカウントをお持ちの方はこちら</p>
                    <Button class="register-to-login-btn" fill>
                        ログイン
                    </Button>
                </div>
            </div>
            <div class="register-section right">
                <NuxtImg class="register-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.register-body {
    display: flex;
    padding-top: 70px;
}

.register-section {
    width: 50%;
}


.left {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    padding: 30px;
}

.register-form-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.register-form {
    padding: 0 12%;
}

.register-form-submit {
    width: 50%;
    padding: 10px;
    margin: 0 auto;
}


.right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

.register-to-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.register-logo {
    aspect-ratio: 1 / 1;
}

.register-to-login-btn {
    width: 50%;
    padding: 10px;
    margin: 0 auto;
}

@media screen and (max-width: 580px) {
    .left {
        width: 100%;
    }

    .right {
        display: none;
    }

    .register-form {
        padding: 0 20px;
    }
}

</style>