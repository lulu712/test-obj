<template>
  <div class="timeline">
    <!-- 發文框（父頁保留） -->
    <div class="composer">
      <img class="avatar" :src="avatar" alt="avatar" />

      <input
        v-model="draft"
        class="input"
        placeholder="今天完成了什麼功能？"
        @keydown.enter.exact="submit"
      />

      <button class="btn" :disabled="!canPost" @click="submit">
        發佈
      </button>
    </div>

    <!-- ✅ 用子元件渲染每一篇 -->
    <PostItem
      v-for="p in posts"
      :key="p.id"
      :post="p"
      :is-reply-open="openReplyId === p.id"
      @toggle-like="store.toggleLike"
      @toggle-reply="toggleReplyBox"
      @add-reply="handleAddReply"
      @delete="handleDelete"
      @repost="repost"
      @share="share"
    />

    <div v-if="posts.length === 0" class="empty">
      還沒有貼文，先發一篇試試 🙂
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PostItem from '@/components/Post/PostItem.vue'
import { usePostsStore } from '@/store/posts' 
import avatar from '@/assets/image/avatar1.jpg'

const store = usePostsStore()

/** 父頁：只管列表 + 發文 */
const draft = ref('')
const posts = computed(() => store.posts)
const canPost = computed(() => draft.value.trim().length > 0)

function submit() {
  if (!canPost.value) return
  store.addPost(draft.value, 'devlog')
  draft.value = ''
}

/** 父頁：只管「哪篇回覆框開著」 */
const openReplyId = ref(null)

function toggleReplyBox(postId) {
  openReplyId.value = (openReplyId.value === postId) ? null : postId
}

/** 子元件回覆送出：集中交給 store */
function handleAddReply(payload) {
  // payload: { postId, text }
  store.addReply(payload.postId, payload.text)
}

/** 子元件刪除：集中交給 store + 可能要收起回覆框 */
function handleDelete(postId) {
  store.deletePost(postId)
  if (openReplyId.value === postId) openReplyId.value = null
}

/** 先保留 */
function repost(postId) { console.log('repost', postId) }
function share(postId) { console.log('share', postId) }
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
.post:last-child{ 
  border-bottom:none; 
}

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
.name{ 
  font-weight:800; 
  font-size:18px; 
}
.time{ 
  color:#8a8a8a; 
  font-size:14px; 
}

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