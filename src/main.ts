import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import "./assets/css/app.scss"
import naver from "vue3-naver-maps";

createApp(App).use(naver, {
    clientId: "5fjibu1a2y",
    category: "ncp",
    subModule: ""
}).use(router).use(createPinia()).mount('#app')
