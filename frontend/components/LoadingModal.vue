<!-- 
    # オリジナルデザイン - ローディングモーダル

    @ props {boolean} is_loading - ローディング表示の有無
    
    ---
    [ 使用例 ]
    <LoadingModal is_loading/>
-->


<template>
    <div class="loading-override" v-if="is_loading">
        <div class="loading-spinner"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    is_loading?: boolean
}>()
</script>

<style scoped>
.loading-override {
    position: fixed;
    z-index: 5000;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    border: 6px solid rgba(52, 73, 94, 0.3);
    border-left-color: #fff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spinner1 1.2s linear infinite
}

@keyframes spinner1{
    0%{
        transform:rotate(0)
    }
    100%{
        transform:rotate(360deg)
    }
}
</style>