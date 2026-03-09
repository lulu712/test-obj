<template>
  <div class="timeline">
    <div class="empty">
      <FaceSmileIcon class="empty-icon"/>

      <h2 class="empty-title">
        尚無任何附帶原始貼文的回覆內容
      </h2>

      <p class="empty-desc">
        系統會在 24 小時後典藏限時貼文。回覆則會顯示在訊息中，
        而且只有你能查看誰已按讚和回覆。
      </p>
    </div>
  </div>
</template>

<script setup>
import { FaceSmileIcon } from '@heroicons/vue/24/outline'
</script>


<style lang="less" scoped>
/* 同 Home.vue 的白色總容器 */
.timeline {
  width: 100%;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
  overflow: hidden;
  /* 根據 GhostPosts 特性可增加基本高度或置中 */
  min-height: 480px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty {
  text-align: center;
  color: #8e8e8e;
  padding: 40px 20px;
}

.empty-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  color: #9e9e9e;
}

.empty-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.empty-desc {
  font-size: 14px;
  line-height: 1.6;
  max-width: 420px;
  margin: auto;
  color: #a1a1a1;
}
</style>