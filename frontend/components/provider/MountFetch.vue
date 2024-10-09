<!-- 
    # プロバイダー - MountFetch

    ---
    @slot - コンテンツの中身

    ---
    @emit {() => Promise<any>} mount - マウント時に実行する関数

    ---
    [ 使用例 ]
    <MountFetch @mount="fetchData">
        <p>マウント時にデータを取得する</p>
    </MountFetch>

-->

<template>
    <ClientOnly>
        <slot>Mount Fetch</slot>
        <LoadingModal :is_loading="loading_open"/>
        <SnackBar :message="error_message" :is_open="Boolean(error_message.length)" />
    </ClientOnly>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    mount: []
}>();

const error_message = ref('');
const loading_open = ref(false);


onBeforeMount(async ()=> {
    loading_open.value = true;
    try {
        const response = await emit('mount');
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
});
</script>

<style scoped>

</style>-