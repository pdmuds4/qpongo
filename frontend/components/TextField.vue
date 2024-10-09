<!-- 
    # オリジナルデザイン - テキストフィールド

    @props {"text" | "password" | "email"} inputType (required) - inputのtype属性
    @props {string} defaultValue (optional) - デフォルトの入力値
    @props {string} placeHolder (optional) - プレースホルダー
    
    ---
    [ 使用例 ]
    <TextField inputType="password" placeHolder="パスワード" defaultValue="qpongo" />
-->

<template>
    <div class="textfield-body">
        <input 
            v-model="input_value"
            :type="is_show ? 'text' : inputType"
            :placeholder="placeHolder"
            :value="input_value"
        />

        <NuxtImg
            class="textfiled-img" 
            :src="`img/components/TextFiled/${is_show ? 'show-eye.svg' : 'hide-eye.svg'}`"
            @click="changeIcon"
            v-if="inputType === 'password'"
        ></NuxtImg>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    inputType: "text" | "password" | "email",
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
.textfield-body {
    display: flex;
}

input {
    width: 100%;
    color: #34495E;
    padding: 0.7vh 1vw;
    border: none;
    outline: 0;
    border-bottom: 3px solid #34495E;
    background-color: inherit;
}

.textfiled-img {
    height: 100%;
    padding: 0vh 1vw;
    border-bottom: 3px solid #34495E;
}
</style>