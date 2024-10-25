<template>
    <div>

    </div>
</template>

<script setup lang="ts">
const { fetcherHandler } = useFetcher()
onBeforeMount(() => {fetcherHandler(async()=>{})})
</script>

<style scoped>

</style>