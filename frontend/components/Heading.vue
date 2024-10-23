<!-- 
    # オリジナルデザイン - ヘディング

    ---
    @slot - ヘディングのテキスト
    
    ---
    [ ハンドリング関数での使用例 ]
    <Heading>
        ユーザー登録
    </Heading>
-->

<template>
    <h1>
        <slot>Heading</slot>
    </h1>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
    color: #34495E;
    font-weight: bold;
    font-size: 24px;
}
</style>