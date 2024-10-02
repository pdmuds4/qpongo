<template>
    <div>
        <FormFetch endpoint="/api/world" method="POST" :body="{id: 1}" v-on:data-getter="(res)=>console.log(res)">
            <button type="submit">Fetch</button>
        </FormFetch>
    </div>
</template>

<script setup lang="ts">
import FormFetch from '~/components/provider/FormFetch.vue';


</script>

<style scoped>

</style>