<template>
    <header class="header">
    <div class="tabs" aria-label="Feed tabs">
      <router-link to="/" class="tab" exact-active-class="active">為你推薦</router-link>
      <router-link to="/following" class="tab" active-class="active">追蹤中</router-link>
      <router-link to="/ghostposts" class="tab" active-class="active">限時貼文</router-link>
    </div>
  </header>
</template>

<script setup>

</script>


<style lang="less" scoped>
.header{
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;      
  top: 0;
  background: #fafafa;   
  z-index: 10;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  padding-right: 72px; /* Offset SideNav width (72px) to center relative to screen */
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
  font-size: 20px;
  font-weight: 600;
  padding: 18px 6px;
  position: relative;
}

/* active：字變黑 + 底線 */
.tab.active{
  color: #000;
}
.tab.active::after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;
  background: #000;
  border-radius: 999px;
}



</style>