<!-- 
    # オリジナルデザイン - チップタグ

    @props {"info" | "alert" | "done"} status - チップのステータス
    @props {string} chip - チップに入るテキスト
    @props {string} text - 一番右側のテキスト
    
    ---
    [ 使用例 ]
    <Chiptag status="alert" chip="エラー" text="エラーが発生しました" />
-->

<template>
    <div class="chiptag-body">
        <div class="chiptag-icon-wrapper">
            <NuxtImg 
                class="chiptag-icon"
                v-if="status_data[status].icon"
                :src="`img/components/Chiptag/${status_data[status].icon}`"
            />
        </div>
        <div 
            class="chiptag-chip"
            v-if="status_data[status].icon"
            :style="`background-color: ${status_data[status].color}`"
        >
            <h1>{{ chip }}</h1>
        </div>
        <div 
            class="chiptag-text"
            :style="`color: ${status_data[status].color}`"
        >
            <h1>{{ text }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    status: "info" | "alert" | "done"
    chip?: string
    text?: string
}>()

const status_data = {
    info : {
        color: '#00AC30',
        icon: null
    },
    alert : {
        color: '#f24e1e',
        icon: 'alert.svg'
    },
    done : {
        color: '#699bf7',
        icon: 'done.svg'
    }
};

</script>

<style scoped>
.chiptag-body {
    display: flex;
    gap: 7px;
}

.chiptag-icon-wrapper {
    display: flex;
}

.chiptag-icon {
    height: 100%;
    width: 24px;
}

.chiptag-chip {
    border-radius: 5px;
    font-weight: bold;
    color: white;
    padding: 3px 10px;
    margin: auto 0;
}

.chiptag-text {
    font-weight: bold;
    margin: auto 0;
}

@media screen and (max-width: 580px) {
    .chiptag-chip {
        padding: 3px 5px;
        font-size: 12px;
    }

    .chiptag-text {
        font-size: 12px;
    }
}

</style>