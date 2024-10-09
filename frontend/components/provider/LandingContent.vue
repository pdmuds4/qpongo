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
            <slot>Landing Content</slot>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    headerBtn: 'register' | 'login'
}>()
</script>

<style scoped>
.landingcontent-body {
    margin-top: 70px;
    padding: 30px;
}

@media screen and (max-width: 580px) {
    .landingcontent-body {
        margin-top: 11vw;
    }
}
</style>