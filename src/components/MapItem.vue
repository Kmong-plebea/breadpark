<script lang="ts" setup>
import { ref } from "vue";
import { NaverMap, NaverMarker } from "vue3-naver-maps";
import { company } from '../../public/company';
import InformationBox from '@/components/InformationBox.vue';
import { useCompanyStore } from "../store/company";

const companyStore = useCompanyStore();
const map = ref();
const mapOptions = {
    latitude: 37.6022808, // 지도 중앙 위도
    longitude: 127.0237139, // 지도 중앙 경도
    zoom: 13,
    zoomControl: false,
    zoomControlOptions: { position: "TOP_RIGHT" },
};
const htmlIcon = {
    anchor: [0.5, 1],
    size: [35, 44],
}
const initLayers = [
    "BACKGROUND",
    "BACKGROUND_DETAIL",
    "POI_KOREAN",
    "TRANSIT",
    "ENGLISH",
];
const onLoadMap = (mapObject: typeof NaverMap) => {
    map.value = mapObject;
};
const hanlder = (company: object) => {
    companyStore.selectCompany(company);
    console.log(companyStore.company)
};
</script>

<template>
    <div class="map">
        <div class="alert">
            <p>업체 핀을 선택하고 세부 정보를 확인하세요.</p>
        </div>
        <naver-map style="width: 100; height: 100%;" :map-options="mapOptions" :init-layers="initLayers"
            @onLoad="onLoadMap($event)">
            <naver-marker v-for="(i, k) in company" :key="k" :html-icon="htmlIcon" :longitude="i.lng" :latitude="i.lat"
                @click="hanlder(i)">
                <img src="@/assets/images/marker.svg" alt="">
            </naver-marker>
        </naver-map>
        <InformationBox />
    </div>
</template>

<style lang="scss" scoped>
.map {
    width: 100%;
    flex: 1;
    position: relative;
}

.alert {
    width: 300px;
    height: 36px;

    transform: translateX(-50%);
    position: absolute;
    top: 25px;
    left: 50%;

    z-index: 1;
    background-color: rgb(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
}
</style>