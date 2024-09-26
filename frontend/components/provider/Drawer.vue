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
        <SideBar class="drawer-side" />
        <BottomBar class="drawer-bottom"/>
        <div class="drawer-content">
            <slot>
                Drawer Provider
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.drawer-side {
    position: fixed;
}

.drawer-bottom {
    display: none;
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
    .drawer-side {
        display: none;
    }

    .drawer-bottom {
        display: flex;
    }

    .drawer-content {
        padding: 20px;
        margin-left: 0;
        height: 88vh;
    }
}

</style>