<script lang="ts" setup>
import Banner from '@/components/BannerItem.vue'
import MapItem from '@/components/MapItem.vue';
</script>

<template>
    <Banner />
    <MapItem />
    <div class="index_detail">
        <a href="http://styleorder.co.kr/">
            <p>견적 알아보기</p>
            <img src="@/assets/images/right_arrow.svg" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.index {
    &_detail {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 30px 0 50px 0;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;

            width: 278px;
            height: 60px;

            border: none;
            outline: none;
            cursor: pointer;

            background-color: #102A6D;
            border-radius: 10px;

            p {
                font-weight: 700;
                font-size: 18px;
                color: #ffffff;
            }
        }

        @media (max-width: 580px) {
            padding: 20px 0 22px 0;
        }
    }
}
</style>