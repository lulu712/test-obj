<template>
  <div class="content">
    <SideNav />

    <div class="feed">
      <header class="topbar">
        <component :is="HeaderComp" />
      </header>

      <div class="feed-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script setup >
import SideNav from './components/Layout/SideNav.vue';
import HeaderTitle from './components/Layout/HeaderTitle.vue'
import HeaderTabs from './components/Layout/HeaderTabs.vue';
import { useRoute } from 'vue-router';
import {computed} from 'vue'

const route =useRoute()


const HeaderComp = computed(() => {
  // 若為tabs則跳轉到HeaderTabs
  return route.meta.header === 'tabs' ?  HeaderTabs :  HeaderTitle
})



</script>

<style lang="less">

.content{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

}

.feed{
  flex: 1;
  overflow-y: auto;
  background: #F2F3F5;
}

.feed-inner{
  width: 100%;          /* ✅ 很重要 */
  max-width: 620px;     /* 中間寬 */
  margin: 0 auto;       /* ✅ 置中關鍵 */
  padding: 0 16px 24px; /* 上面 0 才能貼齊 header 線 */
}
</style>
