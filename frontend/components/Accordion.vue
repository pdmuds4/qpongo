<!-- 
    # オリジナルデザイン - アコーディオン

    @props {boolean} reverse (optional) - 開閉ボタンの位置(false: 右, true: 左)
    
    ---
    @slot show-contents - デフォルトで見えるコンテンツ
    @slot hidden-contents - 開閉ボタンを押した際に表示されるコンテンツ
    
    ---
    [ 使用例 ]
    <Accordion>
        <template #show-contents>
            <h1>見出し</h1>
        </template>
        <template #hidden-contents>
            <p>隠れた内容</p>
        </template>
    </Accordion>
-->

<template>
    <div class="accordion-body" :style="{flexDirection: reverse ? 'row-reverse' : undefined}">
        <!-- 内部コンテンツ -->
        <div class="accordion-contents">
            <div class="accordion-show">
                <slot name="show-contents">
                    <h1>Show-Contents</h1>
                </slot>
            </div>
            <div class="accordion-hidden" v-show="is_open ? true : false">
                <slot name="hidden-contents">
                    <p>Hidden-Contents</p>
                </slot>
            </div>
        </div>

        <!-- 開閉ボタン部分 -->
        <div 
            class="accordion-tab" 
            @click="openAccordion"
            :style="reverse ? {borderRight: '4px dashed #34495E'} : {borderLeft: '4px dashed #34495E'}"
        >
            <NuxtImg 
                class="accordion-btn"
                :src="`img/components/Accordion/${ is_open ? 'close-btn.svg' : 'open-btn.svg'}`"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        reverse?: boolean,
    }>()

    const is_open = ref<boolean>(false)

    const openAccordion = () => {
        is_open.value = !is_open.value
    }
</script>

<style scoped>
    .accordion-body {
        color: #34495E;
        display: flex;
        border-radius: 15px;
        border: 4px solid #34495E;
        background-color: white;
    }

    .accordion-contents {
        width: 100%;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .accordion-tab {
        width: 50px;
        display: flex;
        cursor: pointer;
        justify-content: center;
        padding: 10px 0;
    }

    .accordion-btn {
        height: 30px;
        width: 30px;
    }

@media screen and (max-width: 580px) {
    .accordion-contents {
        padding: 10px;
    }
}

</style>