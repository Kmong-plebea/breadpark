<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useCompanyStore } from '../store/company';

const companyStore = useCompanyStore();
let isSelected = ref(false);
const props = computed(() => {
    const res = companyStore.company;
    if (res?.company) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        isSelected.value = true;
    }
    return res;
})

let img = ref();
if (props.value?.src) {
    img = ref(props.value?.src);
} else {
    img = ref('/src/assets/images/dummy company.png');
}

const exit = () => {
    isSelected.value = false;
    setTimeout(() => {
        companyStore.selectCompany({})
    }, 500);
}
</script>

<template >
    <div :class="{ infor_selected: isSelected }" class="infor">
        <div class="infor_img">
            <img :src="img" alt="">
        </div>

        <div class="infor_textbox">
            <div class="infor_title">
                <h1>{{ props?.company }}</h1>
                <img src="@/assets/images/sm_right_arrow.svg" alt="">
            </div>
            <div class="infor_desc">
                <div class="infor_desc_top">
                    <p v-for="(i, k) in props?.type" :key="k">{{ i }}&nbsp;&nbsp;</p>
                    <img src="@/assets/images/divider.svg" alt="">
                    <p>&nbsp;&nbsp;{{ props?.stuff?.join(' ') }}</p>
                </div>
                <div class="infor_desc_bottom">
                    <p>{{ props?.address }}</p>
                </div>
            </div>
        </div>

        <img class="exit" src="@/assets/images/x.svg" @click="exit">
    </div>
</template>

<style lang="scss">
.infor {
    transform: translate(-50%, -110%);
    position: absolute;
    left: 50%;
    opacity: 0;
    z-index: -1;
    transition: 0.5s;

    width: 375px;
    height: 120px;
    padding: 22px 14px;

    display: flex;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    gap: 15px;

    &_textbox {
        flex: 1;
    }

    &_title {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 6px;

        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
        }

        img {
            width: 5px;
            height: 10px;
        }
    }

    &_desc {
        display: flex;
        flex-direction: column;
        gap: 6px;

        &_top {
            display: flex;
            align-items: center;
        }

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
    }

    &_selected {
        opacity: 1 !important;
        z-index: 0 !important;
    }
}

.exit {
    width: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
}
</style>
