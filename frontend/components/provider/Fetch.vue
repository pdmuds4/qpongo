<template>
    <div>
        <slot>FetchProvider</slot>
    </div>
    <LoadingModal :is_loading="fetcher.loading"/>
    <SnackBar :message="fetcher.error_message" :is_open="fetcher.error" />
</template>

<script setup lang="ts">
const { fetcher, fetcherHandler } = useFetcher();
</script>

<style scoped>

</style>