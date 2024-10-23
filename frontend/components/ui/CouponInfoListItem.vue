<template>
    <div class="coupon-info-listitem-body">
        <Heading class="coupon-info-listitem-title">
            {{ title }}：
        </Heading>
        <div class="coupon-info-listitem-form">
            <slot>
                CouponInfoListItem
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
.coupon-info-listitem-body {
    display: flex;
}

.coupon-info-listitem-title {
    margin: auto 0;
}

.coupon-info-listitem-form {
    margin: auto 0;
    margin-left: auto;
    width: 60%;
}

@media screen and (max-width: 580px) {
    .coupon-info-listitem-title {
        font-size: 15px;
    }
}

</style>