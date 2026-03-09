<template>
  <div class="ghost-container">
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
 .ghost-container{
  background: white;
  border-radius: 24px;
  padding: 0px 20px;
  margin: 0px auto;

  max-width: 520px;
  min-height: 360px;

  display:flex;
  align-items:center;
  justify-content:center;
}

.empty{
  text-align:center;
  color:#8e8e8e;
}

.empty-icon{
  width:56px;
  height:56px;
  margin-bottom:20px;
  color:#9e9e9e;
}

.empty-title{
  font-size:20px;
  font-weight:600;
  margin-bottom:12px;
}

.empty-desc{
  font-size:14px;
  line-height:1.6;
  max-width:420px;
  margin:auto;
  color:#a1a1a1;
}
</style>