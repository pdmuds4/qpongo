<!-- 
    # オリジナルデザイン - テキストエリア

    @props {string} defaultValue (optional) - デフォルトの入力値
    @props {string} placeHolder (optional) - プレースホルダー
    
    ---
    [ 使用例 ]
    <TextArea placeHolder="メッセージ" defaultValue="こんにちは" />
-->

<template>
    <div class="textarea-wrapper">
        <textarea 
            v-model="input_value"
            :placeholder="placeHolder"
        >
            {{ input_value }}
        </textarea>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    defaultValue?: string
    placeHolder?: string,
}>()

// 属性状態
const input_value = ref<string | undefined>(props.defaultValue)

</script>

<style scoped>
.textarea-wrapper {
    width: 100%;
}

textarea {
    width: 100%;
    height: 100px;
    color: #34495E;
    border: none;
    outline: 0;
    border-bottom: 3px solid #34495E;
    background-color: inherit;
}
</style>