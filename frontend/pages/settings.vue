<template>
    <ProviderHomeContent pageTitle="設定">
        <div class="settings-card">
            <div class="settings-user">
                <div class="settings-user-info">
                    <!-- [TODO]: ユーザーのアバターを表示する -->
                    <!-- <NuxtImg 
                        class="setting-user-avator" 
                        src="" 
                    /> -->
                    <div class="settings-user-text">
                        <Heading>{{ resources.user_info.name }}</Heading>
                        <p>{{ resources.user_info.e_mail }}</p>
                    </div>
                </div>
                <!-- [TODO]: UIを用意していないので今回は割愛、そのうちモーダルで編集できるように実装 -->
                <div class="settings-user-edit">
                    <Button class="settings-user-btn" disabled>変更</Button>
                    <Button class="settings-user-btn" fill @click="logoutHandler">ログアウト</Button>
                </div>
            </div>

            <!-- <UiSettingsDivider />

            [TODO]: 通知のタイミングを設定できるようにする
            <div class="settings-list">
                <UiSettingsListItem title="通知のタイミング">
                    ここにフォーム
                </UiSettingsListItem>
            </div> -->

            <UiSettingsDivider />

            <div class="settings-footer">
                <NuxtLink class="settings-link" to="/user_inquiry">お問い合わせ</NuxtLink>
                <NuxtLink class="settings-link" to="/terms">利用規約</NuxtLink>
                <NuxtLink class="settings-link" to="/privacy">プライバシーポリシー</NuxtLink>
            </div>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">
import { GetUserInfoReqDTO, type GetUserInfoResJson } from '~/models/dto/settings';
import { GetUserInfoUseCase } from '~/models/usecase/settings';
import Id from '~/models/value_object/id';

const resources = reactive<{
    user_info: GetUserInfoResJson
}>({
    user_info: {} as GetUserInfoResJson
})

const { fetcherHandler } = useFetcher()

onBeforeMount(() => {
    fetcherHandler(async () => {
        const auth_info = authManager.getToken();
        if (!auth_info) throw new Error('ユーザー情報がありません');

        const request = new GetUserInfoReqDTO(new Id(auth_info.user_id))
        const response = await new GetUserInfoUseCase(request).execute()

        resources.user_info = response.toJson();
    })
})


const logoutHandler = () => {
    authManager.deleteToken()
    navigateTo('/login')
}



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
    object-fit: cover;
    height: 90px;
    width: 90px;
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