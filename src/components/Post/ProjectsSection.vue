<template>
  <section class="projects-section">
    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <img
          class="project-image"
          :src="project.image"
          :alt="project.title"
        />

        <div class="project-body">
          <p class="project-label">{{ project.label }}</p>

          <h3 class="project-title">{{ project.title }}</h3>

          <p class="project-stack">{{ project.stack }}</p>

          <p class="project-desc">{{ project.description }}</p>

          <ul class="project-features">
            <li v-for="feature in project.features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <div class="project-links">
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link primary"
            >
              Live Demo
            </a>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import avatar1 from '@/assets/image/avatar1.jpg'
import avatar2 from '@/assets/image/avatar2.jpg'

const projects = [
  {
    id: 1,
    label: 'Featured Project',
    title: 'Threads Resume Website',
    stack: 'Vue 3 · Pinia · Vue Router · Vite',
    description:'使用 Threads 風格介面製作個人履歷與作品集網站，將自我介紹、專案與開發紀錄整合在同一個網站中。',
    features: [
      '個人檔案頁設計',
      'Tabs 分類切換',
      '發文 / 回覆 / 按讚互動',
      'localStorage 資料保存',
    ],
    image:avatar1,
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    label: 'Project',
    title: 'Snake Game',
    stack: 'JavaScript · HTML · CSS',
    description:'使用原生 JavaScript 製作貪食蛇遊戲，包含遊戲邏輯、分數計算與排行榜功能。',
    features: [
      '遊戲控制與碰撞判斷',
      '分數更新',
      '排行榜功能',
      'DOM 操作練習',
    ],
    image: avatar2 ,
    demo: '#',
    github: '#',
  },
]
</script>

<style scoped lang="less">
.projects-section {
  padding: 24px 24px 32px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #ececec;
  border-radius: 24px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  background: #f5f5f5;
  flex-shrink: 0;
}

.project-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-label {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  color: #8b8b8b;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #111;
}

.project-stack {
  margin: 10px 0 0;
  font-size: 14px;
  color: #666;
}

.project-desc {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: #333;
}

.project-features {
  margin: 16px 0 0;
  padding-left: 18px;
  color: #444;
  font-size: 14px;
  line-height: 1.7;
}

.project-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 24px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 108px;
  height: 40px;
  padding: 0 14px;
  border: 1px solid #ddd;
  border-radius: 14px;
  text-decoration: none;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  background: #fff;
}

.project-link.primary {
  background: #111;
  color: #fff;
  border-color: #111;
}

@media (min-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>