import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import Particles from "particles.vue3";

createApp(App).use(Particles).use(store).use(router).mount('#app')
