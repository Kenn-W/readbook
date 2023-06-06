import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import './mock/api.js'
import Mock from 'mockjs'
createApp(App).use(store).use(router).mount('#app')
Mock.setup({
  timeout: '200-600' // 模拟接口延迟时间
})
