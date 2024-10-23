<template>
    <div>
        <Accordion>
            <template #show-contents>
                <div class="coupon-show-contents">
                    <Chiptag 
                        :status="tagStatus" 
                        :chip="coupon_info.is_used ? '使用済み' : `あと${remainDate}日`"
                        :text="coupon_info.is_used ? '' : `${formattedDate}まで有効`"
                    />
                    <div class="coupon-info-contents">
                        <div class="coupon-info-text">
                            <h3 class="coupon-store-text">
                                {{ props.coupon_info.store.value }}
                            </h3>
                            <h1 class="coupon-discount-text">
                                {{ props.coupon_info.discount.value }}
                            </h1>
                            <h4 class="coupon-goods-text">
                                {{ props.coupon_info.goods.value }}
                            </h4>
                        </div>
                        <div class="coupon-photo">
                            <ToggleImage
                                :frontImage="props.coupon_info.photo_front.value"
                                :backImage="props.coupon_info.photo_back.value"
                            />
                        </div>
                    </div>
                </div>
            </template>
            <template #hidden-contents>
                <div class="coupon-edit-contents">
                    <Button class="coupon-edit-btn" fill @click="toggleUsedHandler">
                        使用済み
                    </Button>
                    <Button class="coupon-edit-btn" @click="navigateTo(`/coupon/edit?id=${props.coupon_info.id.value}`)">
                        編集
                    </Button>
                    <Button class="coupon-edit-btn" error @click="toggleModal">
                        削除
                    </Button>
                </div>
            </template>
        </Accordion>

        <Modal :open="modal_open">
            <div class="coupon-delete-modal">
                <div class="coupon-modal-text">
                    <h1 class="coupon-modal-title">クーポンを削除しますか？</h1>
                    <p class="coupon-modal-subtitle">※この操作は戻せません</p>
                </div>
                <div class="coupon-modal-btngroup">
                    <Button class="coupon-modal-btn" @click="toggleModal">
                        キャンセル
                    </Button>
                    <Button class="coupon-modal-btn" error @click="deleteHandler">
                        削除
                    </Button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { ToggleUsedUseCase, DeleteCouponUseCase } from '~/models/usecase/coupons';
import { DeleteCouponReqDTO, GetUserCouponsResDTO, ToggleUsedReqDTO } from '~/models/dto/coupons';
import type { GetUserSettingsResJson } from '~/models/dto/settings';

const props = defineProps<{
    coupon_info: GetUserCouponsResDTO
    user_setting: GetUserSettingsResJson
}>();

const modal_open = ref(false);
const toggleModal = () => modal_open.value = !modal_open.value;

const formattedDate = computed(()=>{
    const date = new Date(props.coupon_info.deadline.value);
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
})

const remainDate = computed(()=>{
    const date = new Date(props.coupon_info.deadline.value);
    const now = new Date();
    const time_diff = date.getTime() - now.getTime();

    return Math.floor(time_diff / (1000 * 60 * 60 * 24));
})

const tagStatus = computed(() => {
    if (remainDate.value < props.user_setting.notice) return 'alert';
    if (remainDate.value < 0 || props.coupon_info.is_used) return 'done';
    return 'info';
})


const { fetcherHandler } = useFetcher();

const toggleUsedHandler = () => fetcherHandler(async()=>{
    props.coupon_info.is_used = !props.coupon_info.is_used;

    const request = new ToggleUsedReqDTO(
        props.coupon_info.id,
        props.coupon_info.user_id,
        props.coupon_info.goods,
        props.coupon_info.discount,
        props.coupon_info.store,
        props.coupon_info.deadline,
        props.coupon_info.photo_front,
        props.coupon_info.photo_back,
        props.coupon_info.is_used,
        props.coupon_info.category,
        props.coupon_info.create_date
    );
    const response = await new ToggleUsedUseCase(request).execute();
    if (!response.message) throw new Error('クーポンの使用済み切り替えに失敗しました');
});

const deleteHandler = () => fetcherHandler(async()=>{
    const request = new DeleteCouponReqDTO(props.coupon_info.id);
    const response = await new DeleteCouponUseCase(request).execute();
    if (!response.message) throw new Error('クーポンの削除に失敗しました');
    location.reload();
});

</script>

<style scoped>
.coupon-show-contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.coupon-info-contents, .coupon-edit-contents{
    display: flex;
    gap: 10px;
    width: 100%;
}

.coupon-info-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.coupon-photo {
    width: 200px;
    margin-left: auto;
}

.coupon-discount-text {
    font-size: 36px;
    font-weight: bold;
}

.coupon-goods-text {
    font-size: 12px;
}

.coupon-edit-contents {
    width: 100%;
}

.coupon-edit-btn {
    width: 50%;
}

.coupon-delete-modal {
    width: 60vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.coupon-modal-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.coupon-modal-btngroup {
    display: flex;
    gap: 20px;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
}

.coupon-modal-title {
    font-size: 24px;
    font-weight: bold;
}

.coupon-modal-subtitle {
    color: #E74C3C;
    font-weight: bold;
}

.coupon-modal-btn {
    width: 50%;
    padding: 5px 0;
}

@media screen and (max-width: 580px) {
    .coupon-info-contents {
        flex-direction: column;
    }

    .coupon-photo {
        margin: 0 auto;
    }

    .coupon-discount-text {
        font-size: 24px;
        font-weight: bold;
    }

    .coupon-goods-text {
        font-size: 12px;
    }

    .coupon-edit-contents {
        justify-content: center;
    }

    .coupon-delete-modal {
        width: 90vw;
    }

    .coupon-modal-title {
        font-size: 20px;
    }

    .coupon-modal-btngroup {
        width: 100%;
    }
}

</style>