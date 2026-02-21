<template>
  <header class="threads-header">
    <div class="header-inner">
      <div class="tabs" aria-label="Feed tabs">
        <router-link to="/" class="tab" exact-active-class="active">動態</router-link>
        <router-link to="/following" class="tab" exact-active-class="active">追蹤中</router-link>
        <router-link to="/ghostposts" class="tab" exact-active-class="active">限時貼文</router-link>
      </div>
    </div>
  </header>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()



</script>


<style>
.threads-header{
  position: sticky;
  top: 0;
  z-index: 10;
  background:#F2F3F5;  /* 灰色滿版 */
}

/* 這層才是 620px */
.header-inner{
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  height: 64px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

/* tabs 置中 */
.tabs{
  display: flex;
  gap: 40px;
  align-items: center;
}

.tab{
  text-decoration: none;
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 600;
  padding: 18px 6px;
  position: relative;
}

.tab.active{
  color: #000;
}
.tab.active::after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: #000;
  border-radius: 999px;
}

</style>