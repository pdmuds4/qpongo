<!-- 
    # プロバイダー - FormFetch

    @props {string} endpoint - データ取得のエンドポイント
    @props {'GET' | 'POST' | 'PUT' | 'DELETE'} method - リクエストメソッド
    @props {Record<string, any>} query - クエリパラメータ
    
    ---
    @slot - コンテンツの中身(input要素+submitボタン)

    ---
    @emit {(response) => void} data-getter - データ取得後の処理

    ---
    [ 使用例 ]
    
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
const props = defineProps<{
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, any>;
}>()

const emit = defineEmits(['data-getter'])

const error_message = ref('');
const loading_open = ref(false);


const onSubmitEvent = async (event: Event) => {
    event.preventDefault();
    loading_open.value = true;
    try {
        await $fetch(
            props.endpoint,
            {
                method: props.method,
                body: props.body,
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
};
</script>

<style scoped>

</style>