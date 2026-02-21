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
            {path: '' ,name: 'Home',component:Home,meta:{header : 'tabs'}},
            {path: 'profile',name:'Profile',component:Profile,meta:{header : 'title',title: '個人檔案'}},
            {path: 'activity',name:'Activity',component:Activity,meta:{header : 'title',title:'動態'}},
            {path: 'search',name:'Search',component:Search,meta:{header: 'title', title: '搜尋' }},
            {path: 'ghostposts',name:'GhostPosts',component:GhostPosts,meta:{header: 'tabs', title: '貼文' }},
            {path: 'following',name:'Following',component:Following,meta:{header: 'tabs', title: '追蹤中' }}
             
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