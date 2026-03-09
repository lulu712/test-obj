import { defineStore } from 'pinia'

const STORAGE_KEY = 'threads_posts_v2'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: loadPosts(),
  }),

  actions: {
    addPost(text) {
      const content = (text ?? '').trim()
      if (!content) return

      this.posts.unshift({
        id: newId(),
        author: '你自己',
        createdAt: Date.now(),
        text: content,
        tab: 'following', // ✅ 你發文預設屬於追蹤中
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
        author: '你自己',
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
      return Array.isArray(data) ? data : []
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
      id: 'demo-following-1',
      author: 'bosmin23456',
      createdAt: now - 1000 * 60 * 15,
      text: '最後一次在值班人員欄蓋章。洗腎室冷知識除了診所以及小型醫院的洗腎室每週日沒上班大型或中大型醫院的洗腎室在大半夜及週日都會有值班人員在家/醫院待命。這個人專門處理緊急透析、24小時連續洗腎機、血漿置換，還有一堆奇奇怪怪的洗腎疑難雜症。通常，都是一個護理師搭一位腎臟科值班醫師。所以如果在洗腎室洗到CPR，也是一個人邊打電話邊CPR☺️（有的醫院是ICU要自己裝CVVH那除外）',
      tab: 'following',
      likes: 2,
      likedByMe: false,
      replies: [],
    },
    {
      id: 'demo-foryou-1',
      author: '推薦精選',
      createdAt: now - 1000 * 60 * 8,
      text: 'Vue 3 + Pinia 狀態管理真的順 ✨',
      tab: 'forYou',
      likes: 10,
      likedByMe: false,
      replies: [],
    },
  ]
}