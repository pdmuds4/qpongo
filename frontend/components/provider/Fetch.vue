<template>
    <div>
        <slot>FetchProvider</slot>
    </div>
    <LoadingModal :is_loading="fetch_context.loading"/>
    <SnackBar :message="fetch_context.error_message" :is_open="fetch_context.error" />
</template>

<script setup lang="ts">
const fetch_context = useFetcher();

watch(() => fetch_context.value.error, (error) => {
    if (error) {
        setTimeout(() => fetch_context.value.error = false, 5000);
    }
});

</script>

<style scoped>

</style>