<!-- 
    # プロバイダー PolicyContent

    @props {string} title - タイトル
    ---
    @slot - コンテンツの中身

    ---
    [ 使用例 ]
    
-->


<template>
    <div class="policycontent-main">
        <Button class="policycontent-backbtn" @click="backPage">←戻る</Button>
        <Heading class="policycntent-heading">{{ title }}</Heading>
        <div class="policycontent-body">
            <slot>Policy Content</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()

const backPage = () => window.history.back()

</script>

<style scoped>
.policycontent-main{
    padding: 20px;
}

.policycntent-heading {
    margin-top: 20px;
    font-size: 36px;
}

.policycontent-backbtn {
    padding: 5px 10px;
}

.policycontent-body {
    padding: 10px 5px;
}

@media screen and (max-width: 580px) {
    .policycntent-heading {
        font-size: 24px;
        margin-top: 10px;
    }
}

</style>