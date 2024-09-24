<!-- 
    # オリジナルデザイン - チップタグ

    @props {"error" | "info"} status - エラーか情報か
    @props {string} chip - チップに入るテキスト
    @props {string} text - 一番右側のテキスト
    
    ---
    [ 使用例 ]
    <Chiptag status="error" chip="エラー" text="エラーが発生しました" />
-->

<template>
    <div class="chiptag-body">
        <div class="chiptag-icon-wrapper">
            <NuxtImg 
                class="chiptag-icon"
                :src="`img/components/Chiptag/${status === 'error' ? 'error.svg' : 'info.svg'}`"
            />
        </div>
        <div 
            class="chiptag-chip" 
            :style="`background-color: ${status === 'error' ? '#f24e1e' : '#699bf7' }`"
        >
            <h1>{{ chip }}</h1>
        </div>
        <div 
            class="chiptag-text"
            :style="`color: ${status === 'error' ? '#f24e1e' : '#699bf7' }`"
        >
            <h1>{{ text }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    status: "error" | "info"
    chip?: string
    text?: string
}>()
</script>

<style scoped>
.chiptag-body {
    display: flex;
    gap: 5px;
}

.chiptag-icon-wrapper {
    display: flex;
}

.chiptag-icon {
    height: 100%;
    width: 24px;
}

.chiptag-chip {
    border-radius: 5px;
    font-weight: bold;
    color: white;
    padding: 0 10px;
}

.chiptag-text {
    font-weight: bold;
}

</style>