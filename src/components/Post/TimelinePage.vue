<template>
  <div class="timeline">
    <!-- 發文框：只在 following 顯示 -->
    <div v-if="tab === 'following'" class="composer">
      <div class="avatar"></div>

      <input
        v-model="draft"
        class="input"
        placeholder="有什麼新鮮事？"
        @keydown.enter.exact="submit"
      />
      <button class="btn" :disabled="!canPost" @click="submit">發佈</button>
    </div>

    <PostItem
      v-for="p in visiblePosts"
      :key="p.id"
      :post="p"
      :is-reply-open="openReplyId === p.id"
      @toggle-like="store.toggleLike"
      @toggle-reply="toggleReplyBox"
      @add-reply="handleAddReply"
      @delete="handleDelete"
    />

    <div v-if="visiblePosts.length === 0" class="empty">
      目前沒有貼文 🙂
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePostsStore } from '@/store/posts' // 你若是 stores 自己改
import PostItem from '@/components/Post/PostItem.vue'

const props = defineProps({
  tab: { type: String, required: true }, // 'following' | 'forYou'
})

const store = usePostsStore()

/** 只顯示該頁 tab 的貼文 */
const visiblePosts = computed(() => store.posts.filter(p => p.tab === props.tab))

/** 發文（只給 following 用） */
const draft = ref('')
const canPost = computed(() => draft.value.trim().length > 0)

function submit() {
  if (props.tab !== 'following') return
  if (!canPost.value) return
  store.addPost(draft.value) // store 內部會把 tab 設為 following
  draft.value = ''
}

/** 回覆框展開控制 */
const openReplyId = ref(null)
function toggleReplyBox(postId) {
  openReplyId.value = openReplyId.value === postId ? null : postId
}

function handleAddReply({ postId, text }) {
  store.addReply(postId, text)
}

function handleDelete(postId) {
  store.deletePost(postId)
  if (openReplyId.value === postId) openReplyId.value = null
}
</script>

<style scoped lang="less">
/* 白色大框 */
.timeline{
  width: 100%;
  background:#fff;
  border-radius: 30px 30px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
  overflow:hidden;
}

/* 發文框 */
.composer{
  display:flex;
  align-items:center;
  gap:12px;
  padding:16px;
  border-bottom:1px solid rgba(0,0,0,0.08);
}

.input{
  flex:1;
  border:none;
  outline:none;
  font-size:16px;
}

.btn{
  border:1px solid rgba(0,0,0,0.2);
  background:#fff;
  border-radius:14px;
  padding:10px 16px;
  font-weight:700;
  cursor:pointer;
}
.btn:disabled{
  opacity: .4;
  cursor: not-allowed;
}

/* 貼文 */
.post{
  display:flex;
  gap:12px;
  padding:16px;
  border-bottom:1px solid rgba(0,0,0,0.08);
}
.post:last-child{ border-bottom:none; }

.avatar{
  width:44px;
  height:44px;
  border-radius:999px;
  background:#ddd;
  flex:0 0 44px;
}

.body{ flex:1; min-width:0; }

.meta{
  display:flex;
  align-items:center;
  gap:8px;
}
.name{ font-weight:800; font-size:18px; }
.time{ color:#8a8a8a; font-size:14px; }

.more{
  margin-left:auto;
  border:none;
  background:transparent;
  font-size:22px;
  cursor:pointer;
  color:#8a8a8a;
}

.text{
  margin-top:8px;
  line-height:1.6;
  font-size:16px;
  word-break: break-word;
}

.actions{
  margin-top:10px;
  display:flex;
  gap:18px;
  color:#666;
}

.empty{
  padding: 20px 16px;
  color:#888;
}
</style>