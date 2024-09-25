<template>
    <div class="em-confirm-main">
        <Header setBtn="register" />
        <div class="em-confirm-body">
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
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.em-confirm-body {
    padding-top: 70px;
    padding-bottom: 40vh;
}

.em-confirm-contents {
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
}

.em-confirm-resend {
    font-weight: bold;
    text-decoration: underline;
}

</style>