<template>
    <div class="snackbar-body" v-if="is_open">
        <NuxtImg class="snackbar-icon" src="img/components/SnackBar/error.svg" alt="icon" />
        <h1 class="snackbar-title">{{ message }}</h1>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    message: string;
    is_open?: boolean;
}>()

</script>

<style scoped>
.snackbar-body {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 100%;
    max-width: 300px;
    padding: 5px;
    
    background-color: #f44336;
    color: white;
    display: flex;
    gap: 5px;
    border-radius: 10px;
    box-shadow: 4px 3px 4px 0px rgba(0, 0, 0, 0.4);
}

.snackbar-icon {
    height: 100%;
    width: 24px;
    margin: auto 0;
}

.snackbar-title {
    font-size: 16px;
}

@media screen and (max-width: 580px) {
    .snackbar-title {
        font-size: 16px;
    }
}

</style>