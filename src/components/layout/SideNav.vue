<template>
  <nav class="threads-nav">
    <!-- Logo -->
    <router-link to="/" class="logo" aria-label="Threads">
      <span class="logo-mark">◎</span>
    </router-link>

    <!-- Middle icons -->
    <div class="nav-list">
      <router-link to="/" class="nav-btn" :class="{ active: isActive('/') }" aria-label="Home">
        <span class="ic">⌂</span>
      </router-link>

      <router-link to="/search" class="nav-btn" :class="{ active: isActive('/search') }" aria-label="Search">
        <span class="ic">⌕</span>
      </router-link>

      <!-- Create -->
      <button class="nav-btn create" type="button" aria-label="Create">
        <span class="plus">＋</span>
      </button>

      <router-link to="/activity" class="nav-btn" :class="{ active: isActive('/activity') }" aria-label="Activity">
        <span class="ic">♡</span>
      </router-link>

      <router-link to="/profile" class="nav-btn" :class="{ active: isActive('/profile') }" aria-label="Profile">
        <span class="ic">👤</span>
      </router-link>
    </div>

    <!-- Bottom menu -->
    <button class="nav-btn menu" type="button" aria-label="Menu">
      <span class="hamburger">
        <span></span><span></span>
      </span>
    </button>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// 讓 active 判斷更像 App：完全相等才算 active
const isActive = (path) => route.path === path
</script>

<style scoped>
/* 整個左欄 */
.threads-nav{
  width: 72px;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 0;
  box-sizing: border-box;
}

/* Logo */
.logo{
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  text-decoration: none;
  margin-bottom: 18px;
}
.logo-mark{
  font-size: 30px;
  color: #000;
  line-height: 1;
}

/* 中間列表 */
.nav-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;         /* 每個 icon 間距（像你圖那樣大） */
  margin-top: 6px;
}

/* 通用按鈕 */
.nav-btn{
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #bdbdbd;    /* 未選中灰 */
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* icon（用文字先頂著，之後換 SVG） */
.ic{
  font-size: 26px;
  line-height: 1;
  transform: translateY(-1px);
}

/* 選中：變黑 */
.nav-btn.active{
  color: #000;
}

/* Create：淡灰圓角方塊 */
.nav-btn.create{
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: #f1f1f1;
  color: #9e9e9e;
}
.plus{
  font-size: 30px;
  line-height: 1;
}

/* 底部 menu */
.nav-btn.menu{
  margin-top: auto;
  color: #9e9e9e;
}
.hamburger{
  width: 20px;
  height: 16px;
  display: grid;
  gap: 6px;
}
.hamburger span{
  display: block;
  height: 3px;
  border-radius: 999px;
  background: #9e9e9e;
}
</style>