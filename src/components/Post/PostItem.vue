<template>
  <article class="post">
    <img class="avatar" :src="post.avatar || avatar1" alt="avatar" />

    <div class="body">
      <div class="meta">
        <span class="name">{{ post.author }}</span>
        <span class="time">{{ formatTime(post.createdAt) }}</span>

        <!-- 刪除 -->
        <button class="more" type="button" @click="onDelete">...</button>
      </div>

      <div class="text">{{ post.text }}</div>

      <div class="actions">
        <!-- 按讚 -->
        <button class="icon-btn" type="button" @click="emit('toggle-like', post.id)">
          {{ post.likedByMe ? '♥' : '♡' }}
          <span class="count">{{ post.likes }}</span>
        </button>

        <!-- 展開回覆框 -->
        <button class="icon-btn" type="button" @click="emit('toggle-reply', post.id)">
          <ChatBubbleOvalLeftIcon class="icon" />
          <span class="count">{{ post.replies?.length ?? 0 }}</span>
        </button>

        <button class="icon-btn" type="button" @click="emit('repost', post.id)">
          <ArrowPathIcon class="icon" />
        </button>
        <button class="icon-btn" type="button" @click="$emit('share', post.id)">
          <PaperAirplaneIcon class="icon" />
        </button>
      </div>

      <!-- 回覆輸入框：由父層控制開關 -->
      <div v-if="isReplyOpen" class="reply-box">
        <img class="avatar reply-avatar" :src="avatar" alt="avatar" />
        <input
          v-model="replyLocal"
          class="reply-input"
          placeholder="寫下回覆…"
          @keydown.enter.exact="submitReply"
        />
        <button class="reply-btn" type="button" :disabled="!canReply" @click="submitReply">
          回覆
        </button>
      </div>

      <!-- 回覆列表 -->
      <div v-if="(post.replies?.length ?? 0) > 0" class="replies">
        <div v-for="r in post.replies" :key="r.id" class="reply">
          <span class="reply-name">{{ r.author }}</span>
          <span class="reply-text">{{ r.text }}</span>
          <span class="reply-time">· {{ formatTime(r.createdAt) }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { PaperAirplaneIcon,ChatBubbleOvalLeftIcon} from '@heroicons/vue/24/outline'

import avatar from '@/assets/image/avatar1.jpg'
const props = defineProps({
  post: { type: Object, required: true },
  isReplyOpen: { type: Boolean, default: false },
})
  //宣告事件名稱,我可能會發出這幾種事件，讓父可以監聽
const emit = defineEmits([
        'toggle-like', 
        'toggle-reply', 
        'delete', 
        'add-reply', 
        'repost', 
        'share'
])

const replyLocal = ref('')
const canReply = computed(() => replyLocal.value.trim().length > 0)

watch(
  () => props.isReplyOpen,
  (open) => {
    if (!open) replyLocal.value = ''
  }
)

function submitReply() {
  const text = replyLocal.value.trim()
  if (!text) return

  emit('add-reply', { postId: props.post.id, text })
  replyLocal.value = ''
}

function onDelete() {
  const ok = confirm('要刪除這篇貼文嗎？')
  if (!ok) return
  emit('delete', props.post.id)
}

function formatTime(ts) {
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60000)
  if (m < 1) return '剛剛'
  if (m < 60) return `${m} 分鐘`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} 小時`
  const d = Math.floor(h / 24)
  return `${d} 天`
}

</script>


<style lang="less" scoped>
.post { 
    display: flex; 
    gap: 10px; 
    padding: 14px 0; 
    border-bottom: 1px solid #eee; 
}
.avatar { 
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    background: #eee; 
    flex: 0 0 auto; 
}
.body { 
    flex: 1; 
}
.meta { 
    display: flex; 
    gap: 10px; 
    align-items: center; 
}
.name { 
    font-weight: 600; 
}
.time { 
    font-size: 12px; 
    opacity: .7;
 }
.more { 
    margin-left: auto; 
    border: 0; 
    background: transparent; 
    font-size: 18px; 
    cursor: pointer;
    opacity: .7; 
}
.text {
    margin: 8px 0 10px; 
    white-space: pre-wrap; 
}
.actions{
    display: flex; 
    gap: 4px; 
    align-items: center; 

}
.icon-btn {
    border: 0; 
    background:transparent; 
    cursor: pointer; 
    display: inline-flex; 
    gap: 3px; 
    align-items: center; 
   padding: 10px 12px;

}
.count { 
    font-size: 12px; 
    opacity: .75; 
}

.reply-box { 
    display: flex;
    gap: 10px; 
    margin-top: 10px; 
    align-items: center;
}
.reply-avatar {
    width: 32px;
    height: 32px;
}
.reply-input {
    flex: 1; 
    border: 1px solid #ddd; 
    border-radius: 10px; 
    padding: 10px; 
}
.reply-btn {
    border: 1px solid #ddd; 
    border-radius: 10px; 
    padding: 10px 14px; 
    background: white; 
}
.reply-btn:disabled {
    opacity:0.5; 
    cursor: not-allowed; 
}

.replies {
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #f1f1f1; 
    display: grid; gap: 8px; 
}
.reply { 
    display: flex; 
    gap: 6px; 
    flex-wrap: wrap; 
    font-size: 14px; 
}
.reply-name {
    font-weight: 600;
 }
.reply-time {
    font-size: 12px; 
    opacity:0.7; 
}


.icon {
  width: 20px;
  height: 20px;
  color: #2c2828;
}


</style>