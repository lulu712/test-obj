
<template>
    <div class="layout">
        <!-- 固定區 側邊欄-->
        <SideNav/>
    <div class="content">
        <!-- 變動區 不同頁面顯示-->
         <router-view/>
    </div>
</div>
</template>


<script setup >
import SideNav from './components/Layout/SideNav.vue';

</script>

<style lang="less">
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex: 1;
}


</style>
