import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../MainLayout.vue'
import Home from '../views/Home/Home.vue'
import Activity from '../views/Activity/Activity.vue'
import Profile from '../views/Profile/Profile.vue'
import DevLog from '../views/DevLog/DevLog.vue'
import Projects from '../views/Projects/Projects.vue'

const routes = [

    // ✅ 套 Layout：登入後主區（側邊欄固定）
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'Profile', component: Profile, meta: { header: 'title', title: '個人檔案' } },
            { path: 'home', name: 'Home', component: Home, meta: { header: 'tabs' } },
            { path: 'activity', name: 'Activity', component: Activity, meta: { header: 'title', title: '動態' } },
            { path: 'devLog', name: 'DevLog', component: DevLog, meta: { header: 'tabs', title: '開發紀錄' } },
            { path: 'projects', name: 'Projects', component: Projects, meta: { header: 'tabs', title: '作品集' } }

        ]
    },

    // 可選：找不到就回首頁
    { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router