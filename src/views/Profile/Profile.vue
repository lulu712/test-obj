<template>
  <section class="profile-page">
    <div class="profile-card">
      <!-- 上半部：個人資訊 -->
      <div class="profile-top">
        <div class="profile-info">
          <h1 class="name">姸如</h1>
          <p class="username">lulu_chen0912</p>

          <div class="followers">
            <div class="follower-avatars">
              <img :src="avatar1" alt="" />
              <img :src="avatar2" alt="" />
              <img :src="avatar3" alt="" />
            </div>
            <span>85位粉絲</span>
          </div>
        </div>

        <div class="profile-side">
          <img class="main-avatar" :src="avatar1" alt="avatar" />

          <div class="profile-icons">
            <button class="icon-btn">
               <ChartBarSquareIcon class="icon" />
            </button>
            <button class="icon-btn">
                <CameraIcon class="icon" />
            </button>
          </div>
        </div>
      </div>

      <!-- 編輯按鈕 -->
      <button class="edit-btn">編輯個人檔案</button>

      <!-- tabs -->
      <div class="profile-tabs">
        <button class="tab active">串文</button>
        <button class="tab">回覆</button>
        <button class="tab">影音內容</button>
        <button class="tab">轉發</button>
      </div>

      <!-- 發文框 -->
      <div class="composer">
        <img class="composer-avatar" :src="avatar1" alt="avatar" />
        <input
          v-model="draft"
          class="composer-input"
          placeholder="有什麼新鮮事？"
        />
        <button class="publish-btn">發佈</button>
      </div>

      <!-- 下方內容 -->
      <div class="profile-section">
        <div class="section-head">
          <h2>完成個人檔案</h2>
          <span>剩2項</span>
        </div>

        <div class="task-grid">
          <div class="task-card">卡片1</div>
          <div class="task-card">卡片2</div>
          <div class="task-card">卡片3</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import avatar1 from '@/assets/image/avatar1.jpg'
import avatar2 from '@/assets/image/avatar2.jpg'
import avatar3 from '@/assets/image/avatar3.jpg'
import { ChartBarSquareIcon,CameraIcon } from '@heroicons/vue/24/outline'

const draft = ref('')
</script>


<style lang="less" scoped>



.profile-card {
  max-width: 780px;
  margin: 0 auto;
  background: #fff;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.profile-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 42px 24px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
}

.username {
  font-size: 18px;
  margin: 0;
  color: #222;
}

.followers {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  color: #8d8d8d;
  font-size: 16px;
}

.follower-avatars {
  display: flex;
}

.follower-avatars img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: -6px;
  border: 2px solid #fff;
}

.follower-avatars img:first-child {
  margin-left: 0;
}

.profile-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.main-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-icons {
  display: flex;
  gap: 18px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  
}
.icon{
  width:24px;
  height:24px;
}
.edit-btn {
  width: calc(100% - 84px);
  margin: 0 42px 24px;
  height: 40px;
  border-radius: 18px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.profile-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #e8e8e8;
}

.tab {
  height: 68px;
  border: none;
  background: #fff;
  font-size: 18px;
  font-weight: 700;
  color: #999;
  cursor: pointer;
}

.tab.active {
  color: #111;
  border-bottom: 2px solid #111;
}

.composer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 42px;
  border-bottom: 1px solid #e8e8e8;
}

.composer-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.composer-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
}

.publish-btn {
  min-width: 116px;
  height: 56px;
  border-radius: 18px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.profile-section {
  padding: 28px 42px 36px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-head h2 {
  margin: 0;
  font-size: 20px;
}

.section-head span {
  color: #666;
  font-size: 16px;
}

.task-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.task-card {
  height: 180px;
  border-radius: 24px;
  background: #f6f6f6;
  display: grid;
  place-items: center;
  color: #999;
  font-size: 18px;
}
</style>
