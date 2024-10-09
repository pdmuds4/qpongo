<template>
    <ProviderLandingContent headerBtn="login">
        <div class="em-confirm-contents">
            <Heading>
                確認メールを送信しました
            </Heading>
            <p>
                ~@example.com に確認メールを送信しました。<br/>
                メールに記載のURLからアカウント登録を完了させてください。
            </p>
            <p>
                メールが届かない場合は
                <a class="em-confirm-resend" href="">こちら</a>
            </p>
        </div>
    </ProviderLandingContent>
</template>

<script setup lang="ts">

</script>

<style scoped>

.em-confirm-contents {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    height: 70vh;
}

.em-confirm-resend {
    font-weight: bold;
    text-decoration: underline;
}

</style>