<template>
  <section class="profile-page">
    <div class="profile-card">
      <!-- 上半部：個人資訊 -->
      <div class="profile-top">
        <div class="profile-info">
          <h2 class="name">陳姸如 (Chen Yen Ju)</h2>

          <p class="role">Frontend Developer</p>
          <p class="bio">
            專注於 Vue、JavaScript 與前端工程化，喜歡把學習轉化成互動式作品。
          </p>

          <div class="links-row">
              <a href="#" class="profile-link">GitHub</a>
              <span class="dot">・</span>
              <a href="#" class="profile-link">Email</a>
              <span class="dot">・</span>
              <a href="#" class="profile-link">Resume</a>
           </div>

          <div class="meta-row">
            <div class="follower-avatars">
              <img :src="image1" alt="" />
              <img :src="image2" alt="" />
              <img :src="image3" alt="" />
            </div>
            <span class="stats">2 個作品 ・ 8 項技能</span>
          </div>
          <div class="skills">
            <span class="skill-tag">Vue</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">Pinia</span>
            <span class="skill-tag">Vue Router</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Vite</span>
          </div>
          <span>Threads Resume Website <br>Vue3 + Pinia + Router</span>
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
      <!-- tabs -->
      <div class="profile-tabs">
        <router-link to="/home" class="tab" active-class="active">
          關於我
        </router-link>

        <router-link to="/projects" class="tab" active-class="active">
          專案
        </router-link>

        <router-link to="/devlog" class="tab" active-class="active">
          開發紀錄
        </router-link>

        <router-link to="/devlog" class="tab" active-class="active">
          聯絡資料
        </router-link>

      </div>

      <!-- 發文框 -->
      <div class="composer">
        <img class="composer-avatar" :src="avatar1" alt="avatar" />
        <input
          v-model="draft"
          class="composer-input"
          placeholder="更新我的開發紀錄"
        />
        <button class="publish-btn">發佈</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import avatar1 from '@/assets/image/avatar1.jpg'
import image1 from '@/assets/image/image1.jpg'
import image2 from '@/assets/image/image2.png'
import image3 from '@/assets/image/image3.png'
import { ChartBarSquareIcon, CameraIcon } from '@heroicons/vue/24/outline'

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
  padding: 40px 42px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.name {
  font-size: 28px;
  font-weight: 800;
  margin: 0;
}

.role {
  font-size: 16px;
  margin: 8px 0 0;
  color: #222;
  font-weight: 600;
}

.bio {
  font-size: 16px;
  margin: 8px 0 0;
  color: #222;
  line-height: 1.7;
  max-width: 500px;
}

.links-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  font-size: 15px;
}

.profile-link {
  color: #615252;
  text-decoration: none;
  font-weight: 600;
}

.profile-link:hover {
  text-decoration: underline;
  opacity: 0.75;
}

.dot {
  color: #999;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: #8d8d8d;
  font-size: 16px;
  flex-wrap: wrap;
}

.stats {
  color: #8d8d8d;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
  max-width: 420px;
}

.skill-tag {
  padding: 6px 10px;
  border-radius: 16px;
  background: #f3f3f3;
  color: #666;
  font-size: 13px;
  line-height: 1;
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
  gap: 12px;
  margin-left: 24px;
}

.main-avatar {
  width: 110px;
  height: 110px;
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

.icon {
  width: 24px;
  height: 24px;
}

.edit-btn {
  width: calc(100% - 84px);
  margin: 0 42px 0px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #fff;
  font-size: 15px;
  font-weight: 700;
  color: #999;
  cursor: pointer;
  text-decoration: none;
  
}

.tab:hover {
  color: #444;
  border-bottom: 1px solid #111;
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
</style>