<template>
  <header class="threads-header">
    <div class="header-inner">
      <!-- 左側預留空間（未來可放返回箭頭） -->
      <div class="left"></div>

      <!-- 中間標題 -->
      <div class="title">
        {{ title }}
      </div>

      <!-- 右側功能按鈕（可選） -->
      <button class="more">⋯</button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 從 meta 讀取 title
const title = computed(() => route.meta.title || '')
</script>

<style scoped lang="less">
.threads-header{
  height: 64px;
  position: sticky;
  top: 0;
  background:#F2F3F5;
  z-index: 10;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
}

.header-inner{
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

/* 左右預留空間 */
.left{
  width: 40px;
}

.title{
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

.more{
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
}
</style>