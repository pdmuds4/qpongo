<template>
    <ProviderHomeContent pageTitle="設定">
        <div class="settings-card">
            <div class="settings-user">
                <div class="settings-user-info">
                    <NuxtImg class="setting-user-avator" src="https://qiita-user-profile-images.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F3092163%2Fprofile-images%2F1699178784?ixlib=rb-4.0.0&auto=compress%2Cformat&lossless=0&w=128&s=ad7531a58e73b87899fbc55437c34274" />
                    <div class="settings-user-text">
                        <Heading>ユーザー名</Heading>
                        <p>~@example.com</p>
                    </div>
                </div>
                <!-- [TODO]: UIを用意していないので今回は割愛、そのうちモーダルで編集できるように実装 -->
                <div class="settings-user-edit">
                    <Button class="settings-user-btn">変更</Button>
                    <Button class="settings-user-btn" fill>パスワード変更</Button>
                </div>
            </div>

            <UiSettingsDivider />

            <div class="settings-list">
                <UiSettingsListItem title="通知のタイミング">
                    ここにフォーム
                </UiSettingsListItem>
            </div>

            <UiSettingsDivider />

            <div class="settings-footer">
                <NuxtLink class="settings-link" to="/">お問い合わせ</NuxtLink>
                <NuxtLink class="settings-link" to="/">利用規約</NuxtLink>
                <NuxtLink class="settings-link" to="/">プライバシーポリシー</NuxtLink>
            </div>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">

</script>

<style scoped>
.settings-card {
    background-color: white;
    border-radius: 10px;
    border: 3px solid #34495E;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.settings-user {
    display: flex;
    gap: 20px;
    width: 100%;
}

.settings-user-info {
    display: flex;
    gap: 10px;
    width: 65%;
}

.settings-user-edit {
    width: 35%;
}

.setting-user-avator {
    border-radius: 50%;
    box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.3);
}

.settings-user-text {
    width: 70%;
}

.settings-user-edit {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.settings-user-btn {
    margin-left: auto;
    width: 100%;
}

.settings-footer {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 5px;
}

.settings-link {
    margin-left: auto;
} .settings-link:hover {
    text-decoration: underline;
}

@media screen and (max-width: 580px) {
    .settings-user {
        flex-direction: column;
    }

    .settings-user-info {
        width: 100%;
    }

    .settings-card {
        padding: 10px;
    }

    .settings-user-text {
        width: 100%;
    }
    
    .settings-user-edit {
        width: 100%;
        flex-direction: row;
    }
    
    .settings-user-btn {
        width: 50%;
        margin: 0 auto;
    }
}

</style>