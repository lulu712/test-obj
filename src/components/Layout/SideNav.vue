<template>
  <nav class="threads-nav">
    <!-- Logo -->
    <router-link to="/" class="logo" aria-label="Threads">
      <img 
        :src="logo" 
        class="logo-mark"
        alt="threads首頁"
        width="40px"
        height="40px"
        />

    </router-link>

    <!-- Middle icons -->

    <div class="nav-list">

      <router-link to="/" class="nav-btn" aria-label="Profile" data-label="Profile">
         <UserRoundPen class="icon" />
      </router-link>

      <router-link to="/home" class="nav-btn" aria-label="Home" data-label="Home">
        <House class="icon" />
      </router-link>

      <!-- 添加 -->
      <a
        href="https://snake-game-five-indol-18.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-btn create"
        data-label="Game"
      >
        <Gamepad2 class="icon" />
      </a>
      
      <router-link to="/activity" class="nav-btn" aria-label="Activity" data-label="Like" >
        <HeartIcon class="icon" />
      </router-link>

    </div>

    <!-- Bottom menu -->
      <el-dropdown placement="top-end">
      <button class="nav-btn menu"  native-type="button" aria-label="Menu">
       <Bars2Icon class="icon"/>
      </button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>外觀</el-dropdown-item>
          <el-dropdown-item>設定</el-dropdown-item>
          <el-dropdown-item>動態設定</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </nav>
</template>

<script setup>
import { HeartIcon,Bars2Icon } from '@heroicons/vue/24/outline'
import logo from '@/assets/image/Threads.png'
import { Gamepad2,House,UserRoundPen } from 'lucide-vue-next'




</script>

<style lang="less" scoped>
.threads-nav{
  height: 100%;
  width: 72px;
  flex-shrink: 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  background: #F2F3F5;
}

/* Logo */
.logo{
  width: 44px;
  height: 44px;
  display:grid;
  place-items:center;
  margin-bottom: 20px;
}

.logo-mark{
  display:block;
}

/* 中間 icon 區 */
.nav-list{
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;     
}

/* 一般按鈕 */
.nav-btn {
  position: relative;
  width: 60px;
  height: 50px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease;
}

/* hover 背景 */
.nav-btn:hover {
  background: #e9e9e9;
}

/* icon hover 變深 */
.nav-btn:hover .icon {
  color: #111;
}

/* tooltip */
.nav-btn::after {
  content: attr(data-label);
  position: absolute;
  left: 72px;
  top: 50%;
  transform: translateY(-50%);

  background: #111;
  color: #fff;
  font-size:14px;
  line-height: 1;
  padding: 7px 10px;
  border-radius: 8px;

  white-space: nowrap;
  opacity: 0;
  pointer-events: none;

  transition: 0.2s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
  z-index: 10;
}

/* 小箭頭 */
.nav-btn::before {
  content: "";
  position: absolute;
  left: 64px;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-right-color: #111;

  opacity: 0;
  transition: 0.2s ease;
}

/* hover 出現 */
.nav-btn:hover::after,
.nav-btn:focus-visible::after {
  opacity: 1;
  left: 80px;   /* 往右滑出 */
}

.nav-btn:hover::before {
  opacity: 1;
  left: 72px;
}

/* icon 尺寸 */
.icon{
  width: 26px;
  height: 26px;
  color:#b5b5b5;
  transition: color 0.15s ease;
}

/* + 按鈕（官方略大） */
.create{
  width: 60px;      
  height: 50px;
  border-radius: 15px;
  background:#f1f1f1;
}

.create:hover{
  background:#e9e9e9;
}

.create .icon{
  width: 26px;
  height: 26px;
  color:#9e9e9e;
  transform: translateY(1px); /* 視覺中心微調 */
}

/* 底部 menu */
.menu{
  margin-top:20px;
  margin-bottom: 22px;
}

</style>