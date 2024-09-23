<!-- 
    # オリジナルデザイン - ボタン

    @props {boolean} fill (optional) - ボタンの塗りつぶし
    
    ---
    @emit click-handler {() => void} - ボタンクリック時のイベント
    
    ---
    @slot - ボタン内のテキスト
    
    ---
    [ ハンドリング関数での使用例 ]
    <Button @click-handler="handleClick">
        Button
    </Button>

    [ aタグとしての使用例 ]
    <Button>
        <NuxtLink to="/">Button</NuxtLink>
    </Button>
-->

<template>
    <button
        :class = "{ fill : fill, empty : !fill }"
        @click="$emit('click-handler')"
    >
        <slot>Button</slot>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        fill?: boolean
        style?: string
    }>()

    defineEmits(['click-handler'])
</script>

<style scoped>
button {
    font-weight: bold;
    border-radius: 2vh;
    border: 3px solid #34495E;
    cursor: pointer;
}

.empty {
    background-color: #ffffff;
    color: #34495E;
    transition: 0.1s;
} .empty:hover {
    background-color: #34495E;
    color: #ffffff;
    transition: 0.1s;
} .empty:active {
    background-color: #253441;
}

.fill {
    background-color: #34495E;
    color: #ffffff;
    transition: 0.1s;
} .fill:hover {
    background-color: #ffffff;
    color: #34495E;
    transition: 0.1s;
} .fill:active {
    background-color: #c9c9c9;
}

</style>