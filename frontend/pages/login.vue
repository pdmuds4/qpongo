<template>
    <ProviderLandingContent headerBtn="register">
        <div class="login-content">
            <div class="login-section left">
                <Heading class="login-title">ログイン</Heading>
                <div class="login-form-body">
                    <TextField
                        class="login-form"
                        inputType="email"
                        :defaultValue="formValues.e_mail"
                        @change="(e) => formValues.e_mail = e.target.value"
                        placeHolder="メールアドレス" 
                    />
                    <TextField
                        class="login-form"
                        inputType="password"
                        :defaultValue="formValues.password"
                        @change="(e) => formValues.password = e.target.value"
                        placeHolder="パスワード"
                    />
                    <Button 
                        class="login-form-submit" 
                        @click="loginHandler"
                    >
                        ログイン
                    </Button>
                </div>
                <div class="login-to-register">
                    <p>アカウントをお持ちでない方</p>
                    <Button class="login-to-register-btn" fill @click="navigateTo('/register')">
                        アカウント登録
                    </Button>
                </div>
            </div>
            <div class="login-section right">
                <NuxtImg class="login-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
    </ProviderLandingContent>
</template>

<script setup lang="ts">
import UserLoginUseCase from '~/models/usecase/login/userLogin';
import { UserLoginReqDTO } from '~/models/dto/login';
import { UserEmail, UserPassword } from '~/models/value_object/user';

const {fetcherHandler} = useFetcher()

const formValues = reactive({
    e_mail: '',
    password: ''
});

const loginHandler = () => fetcherHandler(async () => {
    const request = new UserLoginReqDTO(
        new UserEmail   (formValues.e_mail),
        new UserPassword(formValues.password)
    );

    const response = await new UserLoginUseCase(request).execute();
    authManager.setToken(JSON.stringify(response.toJson()));
    navigateTo('/coupons');
});

</script>

<style scoped>
.login-content {
    display: flex;
}

.login-section {
    width: 50%;
}

.left {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
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
    padding: 0 12%;
}

.login-form-submit {
    width: 50%;
    margin: 0 auto;
}


.right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-to-register {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.login-logo {
    aspect-ratio: 1 / 1;
}

.login-to-register-btn {
    width: 50%;
    margin: 0 auto;
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