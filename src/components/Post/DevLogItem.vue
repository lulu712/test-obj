<template>
  <article class="devlog-card">
    <header class="devlog-header">
      <div class="devlog-meta">
        <span class="devlog-badge">Dev Log</span>
        <span class="devlog-time">{{ formatTime(post.createdAt) }}</span>
      </div>

      <button class="devlog-more" type="button" aria-label="more">
        •••
      </button>
    </header>

    <div class="devlog-body">
      <p v-if="versionLabel" class="devlog-version">{{ versionLabel }}</p>
      <h3 class="devlog-title">{{ titleLabel }}</h3>

      <div
        class="devlog-text"
        v-html="formattedBody"
      ></div>
    </div>

      <footer class="devlog-footer">
      <div class="devlog-tags">
        <span class="tag">Vue 3</span>
        <span class="tag">UI Update</span>
        <span class="tag">Work Log</span>
      </div>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const cleanText = computed(() => {
  return props.post?.text?.trim?.() ?? ''
})

const lines = computed(() => cleanText.value.split('\n'))

const firstLine = computed(() => lines.value[0] || 'Untitled Log')

const versionLabel = computed(() => {
  const match = firstLine.value.match(/^(v[\d.]+)\s*[—-]\s*(.+)$/i)
  return match ? match[1] : ''
})

const titleLabel = computed(() => {
  const match = firstLine.value.match(/^(v[\d.]+)\s*[—-]\s*(.+)$/i)
  return match ? match[2] : firstLine.value
})

const bodyText = computed(() => {
  return lines.value.slice(1).join('\n').trim()
})

const formattedBody = computed(() => {
  return bodyText.value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
})

const formatTime = (ts) => {
  const diff = Date.now() - ts
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'now'
  if (minutes < 60) return `${minutes}m`
  if (hours < 24) return `${hours}h`
  return `${days}d`
}
</script>

<style scoped>
.devlog-card {
  background: #fff;
  border: 1px solid #ececf1;
  border-radius: 28px;
  padding: 28px 32px 24px;
  box-shadow: 0 10px 30px rgba(17, 17, 17, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.devlog-card:hover {
  transform: translateY(-2px);
  border-color: #dcdce3;
  box-shadow: 0 14px 32px rgba(17, 17, 17, 0.07);
}

.devlog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.devlog-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.devlog-badge {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  background: #111;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.devlog-time {
  font-size: 14px;
  color: #8a8f98;
}

.devlog-more {
  border: none;
  background: transparent;
  color: #9aa0aa;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 10px;
}

.devlog-more:hover {
  background: #f5f5f7;
  color: #555;
}

.devlog-version {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6366f1;
}

.devlog-title {
  margin: 0 0 22px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
  color: #111;
  letter-spacing: -0.01em;
}

.devlog-text {
  font-size: 15px;
  line-height: 1.85;
  color: #20232a;
  word-break: break-word;
}

.devlog-text :deep(strong) {
  display: inline-block;
  margin-top: 18px;
  margin-bottom: 8px;
  padding: 4px 10px;
  border-radius: 8px;
  background: #f3f4f6;
  font-size: 13px;
  font-weight: 700;
  color: #111;
}

.devlog-footer {
  margin-top: 22px;
}

.devlog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
  font-size: 12px;
  font-weight: 600;
}
</style>