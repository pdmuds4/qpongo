<!-- 
    # プロバイダー Drawer

    ---
    @slot - コンテンツの中身

    ---
    [ 使用例 ]
    <ProviderDrawer>
        <div>
            <h1>Drawer Provider</h1>
            <p>Drawer Provider</p>
        </div>
    </ProviderDrawer>
-->

<template>
    <div>
        <SideBar   v-if     ="screen_width &&  screen_width >  580" class="drawer-side"  />
        <BottomBar v-else-if="screen_width &&  screen_width <= 580" class="drawer-bottom"/>
        <div class="drawer-content">
            <slot>
                Drawer Provider
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const screen_width = ref<number|null>(null);

const handleResize = () => {
    screen_width.value = window.innerWidth
}

onMounted(() => {
    screen_width.value = window.innerWidth;
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});


</script>

<style scoped>
.drawer-side {
    position: fixed;
}

.drawer-content {
    overflow-y: auto;
    height: 100vh;
    padding: 30px;
    margin-left: calc(2vw + 176.75px)
}

@media screen and (max-width: 768px){
    .drawer-content {
        padding: 30px;
        margin-left: calc(2vw + 73.89px)
    }
}

@media screen and (max-width: 580px) {
    .drawer-content {
        padding: 15px;
        margin-left: 0;
        height: 88vh;
    }
}

</style>