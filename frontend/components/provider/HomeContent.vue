<!-- 
    # プロバイダー HomeContent

    @props {string} pageTitle - ページタイトル

    ---
    @slot - コンテンツの中身

    ---
    [ 使用例 ]
    
-->

<template>
    <ProviderDrawer>
        <div class="home-doby">
            <Heading class="home-title">{{ pageTitle }}</Heading>
            <div class="home-content">
                <slot>HomeContentProvider</slot>
            </div>
        </div>
    </ProviderDrawer>
</template>

<script setup lang="ts">
defineProps<{
    pageTitle: string
}>()

onBeforeMount(() => {
    authManager.getToken()
})
</script>

<style scoped>
.home-title {
    font-size: 28px;
}

.home-content {
    padding: 10px;
}

@media screen and (max-width: 580px) {
    .home-content {
        padding: 10px 0 0 0;
    }
}
</style>