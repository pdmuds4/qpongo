<template>
    <div class="setting-listitem-body">
        <Heading class="setting-listitem-title">
            {{ title }}
        </Heading>
        <div class="setting-listitem-form">
            <slot>
                SettingsListItem
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style scoped>
.setting-listitem-body {
    display: flex;

}

.setting-listitem-title {
    margin: auto 0;
}

.setting-listitem-form {
    margin: auto 0;
    margin-left: auto;
}

@media screen and (max-width: 580px) {
    .setting-listitem-title {
        font-size: 15px;
    }
    
}

</style>