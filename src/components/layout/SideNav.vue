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
      <router-link to="/" class="nav-btn" aria-label="Home">
        <HomeIcon class="icon" />
      </router-link>

      <!-- 搜索 -->
      <router-link to="/search" class="nav-btn"  aria-label="Search">
        <MagnifyingGlassIcon class="icon" />
      </router-link>

      <!-- 添加 -->
      <button class="nav-btn create" type="button" aria-label="Create">
        <PlusIcon class="icon" />
      </button>

      <router-link to="/activity" class="nav-btn" aria-label="Activity">
        <HeartIcon class="icon" />
      </router-link>

      <router-link to="/profile" class="nav-btn" aria-label="Profile">
         <UserIcon class="icon" />
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
import { HomeIcon,MagnifyingGlassIcon,PlusIcon, HeartIcon, UserIcon,Bars2Icon } from '@heroicons/vue/24/outline'
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, UserIcon as UserSolid } from '@heroicons/vue/24/solid'
import logo from '@/assets/image/Threads.png'




</script>

<style lang="less" scoped>
.threads-nav{
  height: 100vh;
  width: 72px;
  flex-shrink: 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  background: #fafafa;
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
  gap: 12px;        /* ⭐ 原本 18px → 改成 12px */
}

/* 一般按鈕 */
.nav-btn{
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration:none;
}

.nav-btn:hover{
  background:#f2f2f2;
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
  width: 48px;       /* 52 → 48 */
  height: 48px;
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
  margin-top:16px;
}

</style>