<template>
    <div class="register-main">
        <Header setBtn="register" />
        <div class="register-body">
            <div class="register-section left">
                
            </div>
            <div class="register-section right">
                <NuxtImg class="register-logo" src="img/logo.svg" alt="logo" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.register-body {
    display: flex;
    gap: 20px;
    padding-top: 70px;
}

.register-section {
    width: 50%;
    padding: 30px;
    display: flex;
    justify-content: center;
}

.left {
    flex-direction: column;
}

</style>