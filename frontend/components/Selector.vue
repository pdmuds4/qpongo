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
        :class="{ 'non-default': selectedValue !== '' }"
        :style="`background-image: url(${selectorIcon});`"
        @change="handleChange($event)"
    >
        <slot>
            <option value="" disabled>Selector</option>
            <option value="" disabled>Selector</option>
            <option value="" disabled>Selector</option>
        </slot>
    </select>
</template>

<script setup lang="ts">
const props = defineProps<{
    bgImage?: string
}>()
const emit = defineEmits(['change-handler'])


const selectedValue = ref('');
const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedValue.value = target.value;
    emit('change-handler', event)
};


const selectorIcon = computed(() => {
    const image_src = props.bgImage || `img/components/Selector/selector-default.svg`;
    
    return selectedValue.value === '' ? 
        image_src :
        image_src.replace('.svg', '-selected.svg');
})

</script>

<style scoped>
select {
    font-weight: bold;
    border-radius: 2vh;
    border: 3px solid #34495E;
    color: #34495E;
    outline: none;
    max-width: 200px;
    padding: 5px 10px;

    -webkit-appearance: none;
    appearance: none;
    background-repeat: no-repeat;
    background-size: 24px auto;
    background-position: right 0px center;
}

select::-ms-expand {
    display: none;
}

.non-default {
    background-color: #34495E;
    color: white;
}



</style>