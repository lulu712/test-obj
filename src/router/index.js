import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../MainLayout.vue'
import Home from '../views/home/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Activity from '../views/Activity/Activity.vue'
import Search from '../views/Search/Search.vue'
import Profile from '../views/Profile/Profile.vue'
import GhostPosts from '../views/GhostPosts/GhostPosts.vue'
import Following from '../views/Following/Following.vue'

const routes = [
    //不套用layout 登入註冊
      { path: '/login', name: 'Login', component: Login },
      { path: '/register', name: 'Register', component: Register },
    
     // ✅ 套 Layout：登入後主區（側邊欄固定）
      {
        path: '/',
        component: MainLayout,
        children:[
            {path: '' ,name: 'Home',component:Home},
            {path: 'profile',name:'Profile',component:Profile},
            {path: 'activity',name:'Activity',component:Activity},
            {path: 'search',name:'Search',component:Search},
            {path: 'ghostposts',name:'GhostPosts',component:GhostPosts},
            {path: 'following',name:'Following',component:Following}
             
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