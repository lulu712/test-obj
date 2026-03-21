<template>
  <section class="devlog-page">
    <header class="devlog-page-header">
      <h1>Dev Log</h1>
      <p>記錄開發過程、功能調整與學習重點。</p>
    </header>

  <div class="devlog-list">
    <DevLogItem
      v-for="post in devLogPosts"
      :key="post.id"
      :post="post"
    />
  </div>
  </section>
</template>


<script setup>
import DevLogItem from '../../components/Post/DevLogItem.vue';
import { usePostsStore } from '@/store/posts'
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
const { devLogPosts } = storeToRefs(postsStore)

</script>

<style scoped>
.devlog-page {
  max-width: 820px;
  margin: 0 auto;
  padding: 28px 24px 60px;
}

.devlog-page-header {
  margin-bottom: 24px;
}

.devlog-page-header h1 {
  margin: 0 0 8px;
  font-size: 30px;
  font-weight: 800;
  color: #111;
}

.devlog-page-header p {
  margin: 0;
  color: #6f7682;
  font-size: 15px;
  line-height: 1.7;
}

.devlog-list {
  display: grid;
  gap: 18px;
}


</style>