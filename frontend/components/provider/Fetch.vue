<template>
    <div>
        <slot>FetchProvider</slot>
    </div>
    <LoadingModal :is_loading="fetch_context.loading"/>
    <SnackBar :message="fetch_context.error_message" :is_open="fetch_context.error" />
</template>

<script setup lang="ts">
const fetch_context = useState('fetch-provider-context', ()=>({
    loading: false,
    error: false,
    error_message: ''
}));

</script>

<style scoped>

</style>