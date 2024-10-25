<!-- 
    # プロバイダー LandingContent

    @props {'register | login'} headerBtn - ヘッダーのボタンの種類
    ---
    @slot - コンテンツの中身

    ---
    [ 使用例 ]
    
-->

<template>
    <div class="landingcontent-main">
        <Header :setBtn="headerBtn" />
        <div class="landingcontent-body">
            <div class="landingcontent-content">
                <slot>Landing Content</slot>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    headerBtn: 'register' | 'login'
}>()

const { fetcherHandler } = useFetcher()
onBeforeMount(() => {fetcherHandler(async()=>{})})
</script>

<style scoped>
.landingcontent-body {
    margin-top: 70px;
    padding: 30px;
    height: 71vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.landingcontent-content {
    width: 100%;
}

@media screen and (max-width: 580px) {
    .landingcontent-body {
        margin-top: 11vw;
    }
}
</style>