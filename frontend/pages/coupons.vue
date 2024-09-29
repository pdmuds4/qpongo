<template>
    <ProviderHomeContent pageTitle="クーポン一覧">
        <div class="coupons-content">
            <div class="coupons-filter">
                <Selector 
                    class="coupons-filter-selector"
                    bgImage="img/components/Selector/selector-filter.svg"
                    @change-handler="(e:Event)=>console.log(e.target)"
                >
                    <option value="" selected>なし</option>
                    <option value="1">期間中</option>
                    <option value="2">期間終了</option>
                    <option value="3">使用済み</option>
                </Selector>
                <Selector 
                    class="coupons-filter-selector"
                    bgImage="img/components/Selector/selector-list.svg"
                    @change-handler="(e:Event)=>console.log(e.target)"
                >
                    <option value="" selected>期限順</option>
                    <option value="1">登録順</option>
                </Selector>
            </div>
            <div class="coupons-list">
                <UiCouponListItem />
                <UiCouponListItem />
                <UiCouponListItem />
            </div>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">

</script>

<style scoped>
.coupons-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.coupons-list {
    display: flex;
    flex-direction: column;
    gap: 4vh;
}

.coupons-filter {
    width: 50%;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-left: auto;
}


.coupons-filter-selector {
    width: 100%;
}

@media screen and (max-width: 580px) {
    .coupons-filter {
        width: 80%;
    }
}

</style>