
<template>
    <div class="content">
        <!-- 固定區 側邊欄-->
        <SideNav/>
    <div class="feed">
        <!-- 變動區 不同頁面顯示-->
         <router-view/>
    </div>
</div>
</template>


<script setup >
import SideNav from './components/Layout/SideNav.vue';

</script>

<style lang="less">

.content{
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #fafafa;
}

.feed{
  flex: 1;
  overflow-y: auto;   
}

</style>
