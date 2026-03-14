import { defineStore } from 'pinia'
import avatar2 from '@/assets/image/avatar2.jpg'
import avatar1 from '@/assets/image/avatar1.jpg'
import avatar3 from '@/assets/image/avatar3.jpg'

const STORAGE_KEY = 'threads_posts_v3'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: loadPosts(),
  }),

  actions: {
    addPost(text, currentTab) {
      const content = (text ?? '').trim()
      if (!content) return

      this.posts.unshift({
        id: newId(),
        author: '陳姸如',
        avatar: avatar1,
        createdAt: Date.now(),
        text: content,
        tab: currentTab || 'devlog',
        likes: 0,
        likedByMe: false,
        replies: [],
      })

      savePosts(this.posts)
    },

    deletePost(postId) {
      this.posts = this.posts.filter(p => p.id !== postId)
      savePosts(this.posts)
    },

    toggleLike(postId) {
      const post = this.posts.find(p => p.id === postId)
      if (!post) return

      post.likedByMe = !post.likedByMe
      post.likes += post.likedByMe ? 1 : -1
      if (post.likes < 0) post.likes = 0

      savePosts(this.posts)
    },

    addReply(postId, text) {
      const content = (text ?? '').trim()
      if (!content) return

      const post = this.posts.find(p => p.id === postId)
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
  } catch { }
}

function newId() {
  return crypto.randomUUID?.() ?? `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function getDefaultPosts() {
  const now = Date.now()

  return [
    {
      id: 'about-1',
      author: '📌 About Me',
      createdAt: now - 1000 * 60 * 30,
      text: 'Hi，我是陳姸如，目前專注於前端開發，正在持續學習 Vue、JavaScript 與前端工程化。',
      tab: 'about',
      likes: 3,
      likedByMe: false,
      replies: [],
      avatar: avatar2,
    },
    {
      id: 'about-2',
      author: '🧠 Skills',
      createdAt: now - 1000 * 60 * 20,
      text: 'Vue 3 / JavaScript / HTML / CSS / Pinia / Vue Router / Git / Vite',
      tab: 'about',
      likes: 5,
      likedByMe: false,
      replies: [],
      avatar: avatar3,
    },
    {
      id: 'about-3',
      author: '🌱 Learning Journey',
      createdAt: now - 1000 * 60 * 10,
      text: '從 HTML / CSS、JavaScript 開始，接著學習 Vue、Pinia、Vue Router，目前也持續補強 webpack 與 ES6 模組化觀念。',
      tab: 'about',
      likes: 4,
      likedByMe: false,
      replies: [],
      avatar: avatar1,
    },
    {
      id: 'project-1',
      author: '🚀 Threads Resume Website',
      createdAt: now - 1000 * 60 * 40,
      text: '使用 Vue 3 製作的 Threads 風格履歷網站，保留發文、回覆、按讚與個人頁功能，並把自我介紹、專案與開發紀錄做成貼文流。',
      tab: 'projects',
      likes: 8,
      likedByMe: false,
      replies: [
        {
          id: 'project-1-reply-1',
          author: '陳姸如',
          avatar: avatar1,
          createdAt: now - 1000 * 60 * 35,
          text: '技術：Vue 3 / Pinia / Vue Router / localStorage',
        },
      ],
      avatar: avatar2,
    },
    {
      id: 'project-2',
      author: '🎮 Snake Game',
      createdAt: now - 1000 * 60 * 25,
      text: '使用 JavaScript 製作的貪食蛇遊戲，包含遊戲邏輯與排行榜功能。',
      tab: 'projects',
      likes: 6,
      likedByMe: false,
      replies: [],
      avatar: avatar3,
    },
    {
      id: 'devlog-1',
      author: '🛠 Dev Log',
      createdAt: now - 1000 * 60 * 5,
      text: '今天把首頁 tabs 改成 About / Projects / Dev Log。',
      tab: 'devlog',
      likes: 2,
      likedByMe: false,
      replies: [],
      avatar: avatar1,
    },
  ]
}