<!-- 
    # オリジナルデザイン - セレクター

    @props {string} bgImage (optional) - セレクターの画像

    ---
    @slot - セレクターの選択肢

    ---
    @emit change-handler {($event) => void} - セレクター選択時のイベント

    ---
    [ 使用例 ]
    <Selector 
        bgImage="img/components/Selector/selector-default.svg"
        @change-handler="(e:Event)=>console.log(e.target)"
    >
        <option value="0" selected>なし</option>
        <option value="1">期間中</option>
        <option value="2">期間終了</option>
        <option value="3">使用済み</option>
    </Selector>
-->

<template>
    <select 
        :style="`background-image: url(${bgImage || 'img/components/Selector/selector-default.svg'});`"
        @change="$emit('change-handler', $event)"
    >
        <slot>
            <option value="" disabled>Selector</option>
            <option value="" disabled>Selector</option>
            <option value="" disabled>Selector</option>
        </slot>
    </select>
</template>

<script setup lang="ts">
defineProps<{
    bgImage?: string
}>()

defineEmits(['change-handler'])

</script>

<style scoped>
select {
    font-weight: bold;
    border-radius: 2vh;
    border: 3px solid #34495E;
    color: #34495E;

    -webkit-appearance: none;
    appearance: none;
    background-repeat: no-repeat;
    background-size: 24px auto;
    background-position: right 0px center;
}

select::-ms-expand {
    display: none;
}



</style>