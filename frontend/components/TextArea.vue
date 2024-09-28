<!-- 
    # オリジナルデザイン - テキストエリア

    @props {string} defaultValue (optional) - デフォルトの入力値
    @props {string} placeHolder (optional) - プレースホルダー
    
    ---
    [ 使用例 ]
    <TextArea placeHolder="メッセージ" defaultValue="こんにちは" />
-->

<template>
    <textarea 
        v-model="input_value"
        :placeholder="placeHolder"
    >
        {{ input_value }}
    </textarea>
</template>

<script setup lang="ts">
const props = defineProps<{
    defaultValue?: string
    placeHolder?: string,
}>()

// 属性状態
const input_value = ref<string | undefined>(props.defaultValue)

// passwordの場合の可視化
const is_show = ref<boolean>(false)
const changeIcon = () => {
    is_show.value = !is_show.value
}

</script>

<style scoped>
textarea {
    width: 100%;
    color: #34495E;
    padding: 0.7vh 1vw;
    border: none;
    outline: 0;
    border-bottom: 3px solid #34495E;
    background-color: inherit;
    resize: none;
}
</style>