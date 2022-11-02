<script lang="ts" setup>
import { ref } from 'vue';
const selected = ref(0);
const banner = ref([
    {
        img: new URL('../assets/images/dummy banner1.png', import.meta.url).href,
        p: '이런 것도 있었어?',
        h1: '2023 재생원단의 모든 것',
    },
    {
        img: new URL('../assets/images/dummy banner2.png', import.meta.url).href,
        p: '한 눈에 알아보기',
        h1: '브릿지의 업체 매칭이 가장 쉬운 이유',
    },
])
const select = (index: number) => {
    selected.value = index;
}

setInterval(() => {
    if (selected.value === 0) {
        selected.value = 1;
    } else {
        selected.value = 0;
    }
}, 5500);
</script>

<template>
    <div class="banner">
        <img v-for="(i, k) in banner" :key="k" :class="{ banner_change: selected === k }" :src="i.img" alt="banner">

        <div class="banner_textbox">
            <p>{{ banner[selected].p }}</p>
            <h1>{{ banner[selected].h1 }}</h1>
        </div>

        <div class="banner_btns">
            <input v-for="(i, k) in banner" :key="k" :class="{ banner_btns_selected: selected === k }" type="button"
                @click="select(k)">
        </div>
    </div>
</template>

<style lang="scss">
.banner {
    position: relative;

    width: 85%;
    max-width: 680px;
    height: 170px;
    border-radius: 20px;
    background-color: #cecece;

    overflow: hidden;
    margin: 30px auto;

    @media (max-width: 580px) {
        height: 127px;
        margin-bottom: 20px;

        img {
            height: 100% !important;
        }
    }

    img {
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 20px;
        left: 50%;
        top: 50%;

        transition: 0.5s;
        opacity: 0;
    }

    &_change {
        opacity: 1 !important;
    }

    &_textbox {
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        left: 50px;

        max-width: 350px;

        // media query
        @media (max-width: 580px) {
            left: 31px;

            max-width: 184px;

            p {
                font-weight: 500 !important;
                font-size: 12px !important;
                line-height: 17px !important;
            }

            h1 {
                font-weight: 700 !important;
                font-size: 20px !important;
                line-height: 27px !important;
                word-break: keep-all !important;
            }
        }

        p {
            color: white;
            font-weight: 500;
            font-size: 16px;
            line-height: 23px;
            text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: white;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }
    }

    &_btns {
        transform: translateX(-50%);
        position: absolute;
        bottom: 12px;
        left: 50%;

        display: flex;
        gap: 12px;

        input {
            width: 8px;
            height: 8px;

            border: none;
            outline: none;
            border-radius: 50%;

            box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;

            background-color: rgba(255, 255, 255, 0.3);
        }

        &_selected {
            background-color: #ffffff !important;
        }
    }
}
</style>