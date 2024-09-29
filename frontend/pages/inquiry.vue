<template>
    <ProviderLandingContent headerBtn="register">
        <div class="inquiry-content">
            <div class="inquiry-section left">
                <Heading class="inquiry-title">お問い合わせ</Heading>
                <form class="inquiry-form-body">
                    <TextField
                        class="inquiry-form"
                        inputType="text"
                        defaultValue=""
                        placeHolder="お名前" 
                    />
                    <TextField
                        class="inquiry-form"
                        inputType="email"
                        defaultValue=""
                        placeHolder="メールアドレス" 
                    />
                    <TextArea 
                        class="inquiry-form"
                        defaultValue=""
                        placeHolder="お問い合わせ内容"
                    />
                    <Button class="inquiry-form-submit">
                        送信
                    </Button>
                </form>
            </div>
            <div class="inquiry-section right">
                <NuxtImg class="inquiry-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
    </ProviderLandingContent>
</template>

<script setup lang="ts">
</script>

<style scoped>
.inquiry-content {
    display: flex;
}

.inquiry-section {
    width: 50%;
}

.left {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
}

.inquiry-title {
    text-align: center;
}

.inquiry-form-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.inquiry-form {
    padding: 0 12%;
}

.inquiry-form-submit {
    width: 50%;
    padding: 10px;
    margin: 0 auto;
}


.right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.inquiry-to-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.inquiry-logo {
    aspect-ratio: 1 / 1;
}

.inquiry-to-login-btn {
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

    .inquiry-form {
        padding: 0 20px;
    }
}
</style>