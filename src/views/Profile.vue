<template>

<div>
    <h1>我是個人信息</h1>
    <button @click="goHome">按我去首頁</button>
</div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goHome =()=>{
    router.push({name:'Home'})
}

</script>

<style lang="less" scoped>

</style>