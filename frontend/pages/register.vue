<template>
    <ProviderLandingContent headerBtn="login">
        <div class="register-content">
            <div class="register-section left">
                <Heading class="register-title">アカウント登録</Heading>
                <div class="register-form-body">
                    <TextField
                        class="register-form"
                        inputType="email"
                        :defaultValue="formValues.e_mail"
                        @change="(e) => formValues.e_mail = e.target.value"
                        placeHolder="メールアドレス"
                    />
                    <TextField
                        class="register-form"
                        inputType="email"
                        :defaultValue="formValues.secondly_e_mail"
                        @change="(e) => formValues.secondly_e_mail = e.target.value"
                        placeHolder="メールアドレス（確認用）"
                        
                    />
                    <TextField
                        class="register-form"
                        inputType="password"
                        :defaultValue="formValues.password"
                        @change="(e) => formValues.password = e.target.value"
                        placeHolder="パスワード" 
                    />
                    <Button class="register-form-submit" @click="registerHandler">
                        アカウント登録
                    </Button>
                </div>
                <div class="register-to-login">
                    <p>アカウントをお持ちの方はこちら</p>
                    <Button class="register-to-login-btn" fill @click="navigateTo('/login')">
                        ログイン
                    </Button>
                </div>
            </div>
            <div class="register-section right">
                <NuxtImg class="register-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
    </ProviderLandingContent>
</template>

<script setup lang="ts">
import UserRegisterUseCase from '~/models/usecase/register/userRegister';
import { UserRegisterReqDTO } from '~/models/dto/register';
import { UserEmail, UserPassword } from '~/models/value_object/user';

const fetcher = useFetcher().value;
const formValues = reactive({
    e_mail: '',
    secondly_e_mail: '',
    password: ''
});

const registerHandler = async () => {
    fetcher.loading = true;
    try {
        if (formValues.e_mail !== formValues.secondly_e_mail) throw new Error('メールアドレスが一致しません');

        const request = new UserRegisterReqDTO(
            new UserEmail   (formValues.e_mail),
            new UserPassword(formValues.password)
        );
        const response = await new UserRegisterUseCase(request).execute();
        authManager.setToken(JSON.stringify(response.toJson()));
        navigateTo('/coupons');
    } catch (e) {
        fetcher.error = true;
        fetcher.error_message = e instanceof Error ? e.message : 'エラーが発生しました';
    } finally {
        fetcher.loading = false;
    }
}

</script>

<style scoped>
.register-content {
    display: flex;
}

.register-section {
    width: 50%;
}

.left {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
}

.register-title {
    text-align: center;
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
    margin: 0 auto;
}


.right {
    display: flex;
    justify-content: center;
    align-items: center;
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