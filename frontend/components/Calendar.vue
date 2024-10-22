<!-- 
    # オリジナルデザイン - カレンダー

    @props {Date} defaultValue (optional) - デフォルトの入力値
    
    ---
    [ 使用例 ]
    <Calendar :defaultValue="new Date()" />
-->

<template>
    <label>
        <input type="date" :value="formattedDate" />
    </label>
</template>

<script setup lang="ts">
const props = defineProps<{
    defaultValue?: Date
}>()

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const formattedDate = computed(() => {
    return props.defaultValue ? formatDate(props.defaultValue) : '';
});

</script>

<style scoped>
label {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 36px;
    border: 2px solid #34495E;
    border-radius: 15px;
}

input {
    position: relative;
    padding: 0 10px;
    width: 200px;
    height: 36px;
    border: 0;
    background: transparent;
    box-sizing: border-box;
    font-size: 14px;
    color: #34495E;
}

</style>