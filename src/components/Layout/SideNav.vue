<template>
  <nav class="threads-nav">
    <router-link to="/" class="logo" aria-label="Threads">
      <img 
        :src="logo" 
        class="logo-mark"
        alt="threads首頁"
        width="40"
        height="40"
      />
    </router-link>

    <div class="nav-list">
      <router-link to="/" class="nav-btn" data-label="Profile">
        <UserRoundPenIcon class="icon" />
      </router-link>

      <router-link to="/home" class="nav-btn" data-label="Home">
        <HouseIcon class="icon" />
      </router-link>
    </div>

    <div class="nav-bottom">
      <a
        href="https://github.com/你的帳號"
        target="_blank"
        class="nav-btn utility"
        data-label="GitHub"
      >
        <GithubIcon class="icon" />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-btn utility"
        data-label="Resume"
      >
        <FileTextIcon class="icon" />
      </a>

      <a
        href="mailto:benz9779@gmail.com"
        class="nav-btn utility"
        data-label="Contact"
      >
        <MailIcon class="icon" />
      </a>

    </div>
  </nav>
</template>


<script setup>
import { FileTextIcon,MailIcon,HouseIcon,UserRoundPenIcon,GithubIcon } from 'lucide-vue-next'
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
  background: #F2F3F5;
}

/* Logo */
.logo{
  width: 44px;
  height: 44px;
  display:grid;
  place-items:center;
  margin-bottom: 30px;
}

.logo-mark{
  display:block;
}

/* 中間主導航 */
.nav-list{
  flex: 1;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-top: 8px;
}

/* 底部工具 */
.nav-bottom{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin-bottom: 18px;
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
  left: 80px;
}

.nav-btn:hover::before,
.nav-btn:focus-visible::before {
  opacity: 1;
  left: 72px;
}

/* icon 尺寸 */
.icon{
  width: 26px;
  height: 26px;
  color: #9aa0aa;
  transition: color 0.15s ease;
}

/* 底部工具比較輕 */
.nav-btn.github {
  opacity: 0.85;
}
.nav-btn.utility {
  opacity: 0.6;
}

.nav-btn.utility:hover {
  opacity: 1;
}


</style>