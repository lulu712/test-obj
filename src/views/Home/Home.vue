<template>
  <div class="timeline">
    <!-- 發文框（可先簡化） -->
    <div class="composer">
      <div class="avatar"></div>
      <input class="input" placeholder="有什麼新鮮事？" />
      <button class="btn">發佈</button>
    </div>

    <!-- 貼文列表 -->
    <article class="post">
      <div class="avatar"></div>

      <div class="body">
        <div class="meta">
          <span class="name">avantgardey_</span>
          <span class="time">1天</span>
          <button class="more">⋯</button>
        </div>

        <div class="text">
          やっほー！ayaneです😈💜<br />
          3月21日に開催する、Oya卒業公演「17 Memories.」 のファンクラブ限定チケット受付が本日12:00〜startしています!🎟️<br />
          17人でのLast memoriesをぜひ心に焼き付けに来てください!!<br />
          一緒に最高の時間を過ごしましょう✨<br />
          詳細はこちらのリンクから🔗
        </div>
      </div>
    </article>

    <article class="post">
      <div class="avatar"></div>
      <div class="body">
        <div class="meta">
          <span class="name">dcard.tw</span>
          <span class="time">2天</span>
          <button class="more">⋯</button>
        </div>
        <div class="text">有人也是跟不心動的對象在一起的嗎？</div>
      </div>
    </article>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
/* ✅ 中間「白色大框」 */
.timeline{
  background:#fff;
  border-radius:30px 30px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
  overflow:hidden; /* 讓分隔線/圓角乾淨 */
  margin-bottom: 20px;   /* ⬅ 讓圓角有呼吸空間 */
}

/* 發文框（上方那塊） */
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

/* 貼文項目 */
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
  background:#ddd; /* 先用灰色占位 */
  flex:0 0 44px;
}

.body{
  flex:1;
  min-width:0;
}

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
</style>