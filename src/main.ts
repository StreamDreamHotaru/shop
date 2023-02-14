import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api'
import icons from '@/icons'
import 'reset.css'
import '@/utils/rem'
const app = createApp(App)
app.config.globalProperties.$api = api
app.component('icon-svg', icons)
app.use(store)
app.use(router)
app.mount('#app')
