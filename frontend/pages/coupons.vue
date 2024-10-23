<template>
    <ProviderHomeContent pageTitle="クーポン一覧">
        <div class="coupons-content" v-if="resouces.coupons.length">
            <div class="coupons-filter">
                <Selector 
                    class="coupons-filter-selector"
                    bgImage="img/components/Selector/selector-filter.svg"
                    @change-handler="(e) => resouces.filter.status = e.target.value"
                >
                    <option value="0" selected>なし</option>
                    <option value="1">期間中</option>
                    <option value="2">期間終了</option>
                    <option value="3">使用済み</option>
                </Selector>
                <Selector 
                    class="coupons-filter-selector"
                    bgImage="img/components/Selector/selector-list.svg"
                    @change-handler="(e) => resouces.filter.order = e.target.value"
                >
                    <option value="" selected>期限順</option>
                    <option value="1">登録順</option>
                </Selector>
            </div>
            <div class="coupons-list">
                <UiCouponListItem 
                    v-for="coupon in filterdCoupons"
                    :key="coupon.id"
                    :coupon_info="coupon"
                    :user_setting="resouces.user_setting"
                />
            </div>
        </div>
        <div class="coupons-nocontent" v-else>
            <NuxtImg
                class="coupons-nocontent-img"
                src="/img/no-coupons.svg"
                alt="no-coupons"
            />
            <span class="coupons-nocontent-title">クーポンがみつかりませんでした</span>
        </div>
    </ProviderHomeContent>
</template>

<script setup lang="ts">
import { GetUserCouponsUseCase } from '~/models/usecase/coupons';
import { GetUserCouponsReqDTO, type GetUserCouponsResJson } from '~/models/dto/coupons';
import { GetUserSettingsUseCase } from '~/models/usecase/settings';
import { GetUserSettingsReqDTO, type GetUserSettingsResJson } from '~/models/dto/settings';
import Id from '~/models/value_object/id';

const {fetcher, fetcherHandler} = useFetcher();
const resouces = reactive<{
    coupons: GetUserCouponsResJson[],
    user_setting: GetUserSettingsResJson,
    filter: {
        status: 0 | 1 | 2 | 3,
        order: 1 | 2,
    }
}>({
    coupons: [],
    user_setting: {} as GetUserSettingsResJson,
    filter: {
        status: 0,
        order: 1,
    }
});

onBeforeMount(async()=>{
    await getCouponsHandler();
    await getSettingHandler();
})

const getCouponsHandler = () => fetcherHandler(async()=>{
    const auth_info = authManager.getToken()
    if (!auth_info) throw new Error('認証情報がありません');
    const user_id = auth_info.user_id;

    const request = new GetUserCouponsReqDTO(new Id(user_id));
    const response = await new GetUserCouponsUseCase(request).execute();
    if (response) resouces.coupons = response.map(coupon => coupon.toJson());
})

const getSettingHandler = () => fetcherHandler(async()=>{
    const auth_info = authManager.getToken()
    if (!auth_info) throw new Error('認証情報がありません');
    const user_id = auth_info.user_id;

    const request = new GetUserSettingsReqDTO(new Id(user_id));
    const response = await new GetUserSettingsUseCase(request).execute();
    resouces.user_setting = response.toJson();
})


const filterdCoupons = computed(()=>{
    return resouces.coupons.filter(coupon => {
        if (resouces.filter.status === 0) return true;
        if (resouces.filter.status === 1) return coupon.deadline.getTime() > new Date().getTime();
        if (resouces.filter.status === 2) return coupon.deadline.getTime() < new Date().getTime();
        if (resouces.filter.status === 3) return coupon.is_used;
    }).sort((a, b) => {
        if (resouces.filter.order === 1) {
            return a.deadline.getTime() - b.deadline.getTime();
        } else {
            return a.create_date.getTime() - b.create_date.getTime();
        }
    });
})
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

.coupons-nocontent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 0.6;
}

.coupons-nocontent-img {
    width: 50vw;
    max-width: 400px;
    min-width: 200px;
}

.coupons-nocontent-title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
}

@media screen and (max-width: 580px) {
    .coupons-filter {
        width: 80%;
    }
}

</style>