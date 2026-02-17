<template>
  <div>
    <h1>threads</h1>
    <button @click="goAbout">去 About 頁面</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goAbout = () => {
  router.push({ name: 'About' })
}
</script>




<style lang="less" scoped>
.home {
  padding: 10px;
}


</style>