<!-- 
    # オリジナルデザイン - ボタン

    @props {boolean} fill (optional) - ボタンの塗りつぶし
    @props {boolean} disabled (optional) - ボタンの無効化
    @props {boolean} error (optional) - ボタンの色を赤にする
    
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
        :class = "{ 
            fill : fill, empty : !fill, 
            disabled : disabled, 
            error: error,
            fill_nodisabled : fill && !disabled,
            empty_nodisabled : !fill && !disabled,
            fill_error : fill && error,
            empty_error : !fill && error
        }"
        :disabled = "disabled"
        @click="$emit('click-handler')"
    >
        <slot>Button</slot>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        fill?: boolean
        disabled?: boolean
        error?: boolean
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
} .empty_nodisabled:hover {
    background-color: #34495E;
    color: #ffffff;
    transition: 0.1s;
} .empty_nodisabled:active {
    background-color: #253441;
}

.fill {
    background-color: #34495E;
    color: #ffffff;
    transition: 0.1s;
} .fill_nodisabled:hover{
    background-color: #ffffff;
    color: #34495E;
    transition: 0.1s;
} .fill_nodisabled:active{
    background-color: #c9c9c9;
}

.disabled {
    opacity: 0.5;
    cursor: auto;
}


.error {
    border-color: #E74C3C;
}

.empty_error {
    color: #E74C3C;
} .empty_error:hover {
    background-color: #E74C3C;
} .empty_error:active {
    background-color: #C0392B;
}

.fill_error {
    background-color: #E74C3C;
} .fill_error:hover {
    color: #E74C3C;
} .fill_error:active {
    background-color: #C0392B;
}

</style>