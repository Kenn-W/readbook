import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import './mock/api.js'
import Mock from 'mockjs'
import * as ELIcons from '@element-plus/icons-vue'
createApp(App).use(store).use(router).mount('#app')
Mock.setup({
  timeout: '200-600' // 模拟接口延迟时间
})

const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
