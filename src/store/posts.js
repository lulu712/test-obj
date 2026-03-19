import { defineStore } from 'pinia'
import avatar2 from '@/assets/image/avatar2.jpg'
import avatar1 from '@/assets/image/avatar1.jpg'
import avatar3 from '@/assets/image/avatar3.jpg'

const STORAGE_KEY = 'threads_posts_v4'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: loadPosts(),
  }),

  getters: {
    aboutPosts: (state) => state.posts.filter(post => post.tab === 'about'),
    projectPosts: (state) => state.posts.filter(post => post.tab === 'projects'),
    devLogPosts: (state) => state.posts.filter(post => post.tab === 'devlog'),
  },

  actions: {
    addPost(text, currentTab = 'devlog') {
      const content = (text ?? '').trim()
      if (!content) return

      this.posts.unshift({
        id: newId(),
        author: '陳姸如',
        avatar: avatar1,
        createdAt: Date.now(),
        text: content,
        tab: currentTab,
        likes: 0,
        likedByMe: false,
        replies: [],
      })

      savePosts(this.posts)
    },

    addDevLog(text) {
      const content = (text ?? '').trim()
      if (!content) return

      this.posts.unshift({
        id: newId(),
        author: '🛠 Dev Log',
        avatar: avatar1,
        createdAt: Date.now(),
        text: content,
        tab: 'devlog',
        likes: 0,
        likedByMe: false,
        replies: [],
      })

      savePosts(this.posts)
    },

    deletePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId)
      savePosts(this.posts)
    },

    toggleLike(postId) {
      const post = this.posts.find(post => post.id === postId)
      if (!post) return

      post.likedByMe = !post.likedByMe
      post.likes += post.likedByMe ? 1 : -1

      if (post.likes < 0) post.likes = 0

      savePosts(this.posts)
    },

    addReply(postId, text) {
      const content = (text ?? '').trim()
      if (!content) return

      const post = this.posts.find(post => post.id === postId)
      if (!post) return

      post.replies.unshift({
        id: newId(),
        author: '陳姸如',
        avatar: avatar1,
        createdAt: Date.now(),
        text: content,
      })

      savePosts(this.posts)
    },

    resetPosts() {
      this.posts = getDefaultPosts()
      savePosts(this.posts)
    },
  },
})

function loadPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      return Array.isArray(data) ? data : getDefaultPosts()
    }
    return getDefaultPosts()
  } catch {
    return getDefaultPosts()
  }
}

function savePosts(posts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  } catch {}
}

function newId() {
  return crypto.randomUUID?.() ?? `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function getDefaultPosts() {
  const now = Date.now()

  return [
    {
      id: 'devlog-1',
      author: '🛠 Dev Log',
      createdAt: now - 1000 * 60 * 60,
      text: `📌 Dev Log — Tabs 改版

            🛠 做了什麼
            將首頁 Tabs 從原本結構改為：
            About / Projects / Dev Log

            🔧 使用技術
            Vue 3 / ref / 狀態切換

            ✨ 功能
            - 分頁切換
            - UI 結構更清楚

            🧠 學到什麼
            分類清楚比功能多更重要`,
      tab: 'devlog',
      likes: 2,
      likedByMe: false,
      replies: [],
      avatar: avatar1,
    },

    {
      id: 'devlog-2',
      author: '🛠 Dev Log',
      createdAt: now - 1000 * 60 * 30,
      text: `📌 Dev Log — Projects 卡片化

        🛠 做了什麼
          將原本貼文式的 Projects 改為卡片 UI

        🔧 使用技術
            v-for / component 拆分

        ✨ 功能
            - 專案卡片
            - hover 效果
            - grid 排版

        🧠 學到什麼
            UI 呈現會影響作品專業度`,
      tab: 'devlog',
      likes: 3,
      likedByMe: false,
      replies: [],
      avatar: avatar1,
    },

    {
      id: 'devlog-3',
      author: '🛠 Dev Log',
      createdAt: now - 1000 * 60 * 10,
      text: `📌 Dev Log — Pinia 狀態管理

          🛠 做了什麼
          將貼文資料集中管理到 Pinia store

          🔧 使用技術
          Pinia / localStorage

          ✨ 功能
          - 新增貼文
          - 刪除貼文
          - 按讚功能
          - 回覆功能

          🧠 學到什麼
          集中管理 state 讓邏輯更清楚`,
  tab: 'devlog',
  likes: 4,
  likedByMe: false,
  replies: [],
  avatar: avatar1,
}
  ]
}