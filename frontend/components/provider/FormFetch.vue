<!-- 
    # プロバイダー - FormFetch


    ---
    @slot - コンテンツの中身(input要素+submitボタン)

    ---
    @emit {() => Promise<any>} submit - submit時に実行する関数

    ---
    [ 使用例 ]
    <FormFetch @submit="fetchData">
        <input type="text" name="name" />
        <button type="submit">送信</button>
    </FormFetch>

-->

<template>
    <ClientOnly>
        <form @submit="onSubmitEvent">
            <slot>Form Fetch</slot>
        </form>
        <LoadingModal :is_loading="loading_open"/>
        <SnackBar :message="error_message" :is_open="Boolean(error_message.length)" />
    </ClientOnly>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    submit: []
}>()

const error_message = ref('');
const loading_open = ref(false);


const onSubmitEvent = async (event: Event) => {
    event.preventDefault();
    loading_open.value = true;
    try {
        const response = await emit('submit');
        return response
    } catch (error) {
        if (error instanceof customError) {
            error_message.value = error.message;
        } else {
            error_message.value = '不明なエラーが発生しました'
        }
    } finally {
        loading_open.value = false;
    }
};
</script>

<style scoped>

</style>