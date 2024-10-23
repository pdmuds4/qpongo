<!-- 
    # オリジナルデザイン - モーダル

    @props {boolean} open - モーダルの表示状態
    
    ---
    @slot - モーダルの中身
    
    ---
    [ 使用例 ]
    <Modal :open="true">
        <div>
            <h1>モーダル</h1>
            <p>モーダルの中身</p>
        </div>
    </Modal>
-->


<template>
    <div class="modal-bg" :hidden="!open">
        <div class="modal-body">
            <slot>Modal</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    open: boolean;
}>();
</script>

<style scoped>
.modal-bg {
    position: fixed;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-body {
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}
</style>