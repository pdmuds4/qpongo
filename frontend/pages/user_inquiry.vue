<template>
    <ProviderHomeContent pageTitle="お問い合わせ">
        <form class="user-inquiry-body">
            <Heading class="use-inquiry-info">
                ユーザ名：
            </Heading>
            <Heading class="use-inquiry-info">
                Eメール：
            </Heading>
            <TextArea
                class="user-inquiry-form"
                defaultValue=""
                placeHolder="お問い合わせ内容を入力してください"
            />
            <Button class="user-inquiry-btn">
                送信
            </Button>
        </form>
    </ProviderHomeContent>
</template>

<script setup lang="ts">

</script>

<style scoped>
.user-inquiry-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.user-inquiry-listitem {
    display: flex;
}

.use-inquiry-info {
    font-size: 20px;
}


.user-inquiry-btn {
    margin: 0 auto;
    width: 80%;
}

</style>