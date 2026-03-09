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
       <el-dropdown>
         <button class="more">
          <EllipsisHorizontalCircleIcon class="icon" />
         </button>
               <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>外觀</el-dropdown-item>
          <el-dropdown-item>設定</el-dropdown-item>
          <el-dropdown-item>動態設定</el-dropdown-item>
        </el-dropdown-menu>
      </template>
       </el-dropdown>
     
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'

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
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
}


.icon {
  width: 20px;
  height: 20px;
  color: #2c2828;
}

</style>