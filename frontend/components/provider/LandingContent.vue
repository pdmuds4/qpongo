<!-- 
    # プロバイダー LandingContent

    ---
    @slot - コンテンツの中身

    ---
    [ 使用例 ]
    
-->

<template>
    <div class="landingcontent-main">
        <Header setBtn="register" />
        <div class="landingcontent-body">
            <slot>Landing Content</slot>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.landingcontent-body {
    margin-top: 70px;
    padding: 30px;
}
</style>