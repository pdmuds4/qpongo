<!-- 
    # オリジナルデザイン - サイドバー(PC or iPad)

    @props {number} selected (optional) - 選択されているメニューのID
    * 1: クーポン登録
    * 2: クーポン一覧
    * 3: 設定
    
    ---
    [ 使用例 ]
    <SideBar :selected="1" />
-->


<template>
    <div class="sidebar-body">
        <NuxtLink class="sidebar-img-wrapper" to="/">
            <NuxtImg class="sidebar-img" src="img/logo.svg" />
        </NuxtLink>
        <div class="sidebar-list">
            <NuxtLink v-for="content in menu_data"
                :style="selected === content.id ? {border: '2px solid #34495E'} : {}"
                :to="content.link"
                class="sidebar-content"
            >
                <NuxtImg class="sidebar-icon" :src="content.icon" />
                <p class="sidebar-name">{{ content.name }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    selected?: number;
}>()

// [!] refのtypeをどうするか決める
type MenuContent = {
    id: number;
    name: string;
    icon: string;
    link: string;
}

const menu_data = ref<MenuContent[]>([
    {
        id: 1,
        name: 'クーポン登録',
        icon: 'img/components/SideBar/coupon-register.svg',
        link: '/'
    },
    {
        id: 2,
        name: 'クーポン一覧',
        icon: 'img/components/SideBar/coupon-list.svg',
        link: '/'
    },
    {
        id: 3,
        name: '設定',
        icon: 'img/components/SideBar/setting.svg',
        link: '/'
    }
]);

</script>

<style scoped>
.sidebar-body {
    text-align: center;
    position: absolute;
    background-color: white;

    /* 430px 以上 */
    padding: 1vw 1vw;
    box-shadow: 3px 5px 5px 0px rgb(116, 116, 116);
    height: 100%;
    left: 0px;
}

.sidebar-img-wrapper {
    display: flex;
    justify-content: center;
    border-radius: 10px;
} .sidebar-img-wrapper:hover {
    cursor: pointer;
} .sidebar-img-wrapper:active {
    background-color: #e5e5e5;
}

.sidebar-img {
    padding: 1vw;
    width: 15vh;
}

.sidebar-list {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
}

.sidebar-content {
    display: flex;
    padding: 0px 1vh;
    text-decoration: none;
    border-radius: 1vh;
    margin: 2vh 0px;
} .sidebar-content:hover {
    cursor: pointer;
} .sidebar-content:active {
    background-color: #e5e5e5;
}

.sidebar-icon {
    padding: 1vh;
}

.sidebar-name {
    color: #34495E;
    font-weight: bold;
    margin: auto;
    padding: 1vh;
}

@media screen and (max-width: 768px){
    .sidebar-img {
        width: 10vh;
    }

    .sidebar-content {
        text-align: center;
    }

    .sidebar-icon {
        padding: 1vh;
        margin: auto;
    }
    .sidebar-name {
        display: none;
    }
}

</style>