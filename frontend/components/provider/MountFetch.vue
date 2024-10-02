<!-- 
    # プロバイダー - MountFetch

    @props {string} endpoint - データ取得のエンドポイント
    
    ---
    @slot - コンテンツの中身

    ---
    @emit {(response) => void} data-getter - データ取得後の処理

    ---
    [ 使用例 ]
    
-->

<template>
    <ClientOnly>
        <slot>Mount Fetch</slot>
        <LoadingModal :is_loading="loading_open"/>
        <SnackBar :message="error_message" :is_open="Boolean(error_message.length)" />
    </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps<{
    endpoint: string;
}>()

const emit = defineEmits(['data-getter'])

const error_message = ref('');
const loading_open = ref(false);


onBeforeMount(async ()=> {
    loading_open.value = true;
    try {
        await useFetch(
            props.endpoint,
            {
                onResponse: (response) => {
                    emit('data-getter', response.response._data);
                },
                onResponseError: (error) => {
                    error_message.value = error.response?._data.message;
                },
            }
        );
    } finally {
        loading_open.value = false;
    }
});
</script>

<style scoped>

</style>-