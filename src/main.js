import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'


const app = createApp(App)
app.use(ElementPlus)


//一定要先掛載router，才能在組件中使用router.push()等方法
app.use(router)
app.mount('#app')

