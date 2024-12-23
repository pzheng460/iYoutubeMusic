<template>
  <aside class="sidebar">
    <div class="logo">
      <svg height="24" viewBox="0 0 24 24" width="24" fill="#FF0000">
        <path
          d="M12 0C5.376 0 0 5.376 0 12s5.376 12 
            12 12 12-5.376 12-12S18.624 0 12 0zm0 
            19.2c-3.84 0-7.2-3.36-7.2-7.2s3.36-7.2
            7.2-7.2 7.2 3.36 7.2 7.2-3.36 7.2-7.2 7.2z"
        />
      </svg>
      <span>YouTube Music</span>
    </div>

    <!-- 首页 -->
    <router-link to="/" class="nav-item">
      <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
        <path
          d="M12 3L4 9v12h16V9l-8-6zm6 
            16h-3v-6H9v6H6v-9l6-4.5 
            6 4.5v9z"
        />
      </svg>
      首页
    </router-link>

    <!-- 搜索 -->
    <router-link to="/search" class="nav-item">
      <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 
            6.471 0 0 0 16 9.5 6.5 6.5 
            0 1 0 9.5 16c1.61 0 3.09-.59
            4.23-1.57l.27.28v.79l5 4.99L20.49 
            19l-4.99-5zm-6 0C7.01 14 5 
            11.99 5 9.5S7.01 5 9.5 5 
            14 7.01 14 9.5 11.99 14 
            9.5 14z"
        />
      </svg>
      搜索
    </router-link>

    <!-- 资料库 -->
    <router-link to="/library" class="nav-item">
      <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
        <path
          d="M20 2H8c-1.1 0-2 .9-2 
            2v12c0 1.1.9 2 2 2h12c1.1 
            0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2
            5h-3v5.5c0 1.38-1.12 2.5-2.5 
            2.5S10 13.88 10 12.5s1.12-2.5 
            2.5-2.5c.57 0 1.08.19 
            1.5.51V5h4v2zM4 6H2v14c0 
            1.1.9 2 2 2h14v-2H4V6z"
        />
      </svg>
      资料库
    </router-link>

    <!-- 分区：播放列表 -->
    <div class="sidebar-section">
      <div class="sidebar-header">
        播放列表
        <div class="add-playlist" @click="onAddPlaylistClick">
          <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </div>
      </div>

      <div class="sidebar-playlist" @click="changePlaylist('我的最爱')">
        <svg height="18" viewBox="0 0 24 24" width="18" fill="currentColor">
          <path
            d="M12 21.35l-1.45-1.32C5.4 
              15.36 2 12.28 2 8.5 2 5.42 
              4.42 3 7.5 3c1.74 0 3.41.81 
              4.5 2.09C13.09 3.81 14.76 
              3 16.5 3 19.58 3 22 5.42 
              22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z"
          />
        </svg>
        我的最爱
      </div>

      <div class="sidebar-playlist" @click="changePlaylist('最近播放')">
        <svg height="18" viewBox="0 0 24 24" width="18" fill="currentColor">
          <path
            d="M13 3c-4.97 0-9 4.03-9 
              9H1l3.89 3.89.07.14L9 
              12H6c0-3.87 3.13-7 7-7s7
              3.13 7 7-3.13 7-7 7c-1.93 
              0-3.68-.79-4.94-2.06l-1.42 
              1.42C8.27 19.99 10.51 
              21 13 21c4.97 0 9-4.03 
              9-9s-4.03-9-9-9zm-1 
              5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
          />
        </svg>
        最近播放
      </div>

      <div class="sidebar-playlist" @click="changePlaylist('下载的音乐')">
        <svg height="18" viewBox="0 0 24 24" width="18" fill="currentColor">
          <path
            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 
              0-4 1.79-4 4s1.79 4 4 4 
              4-1.79 4-4V7h4V3h-6zm-2 
              16c-1.1 0-2-.9-2-2s.9-2 
              2-2 2 .9 2 2-.9 2-2 2z"
          />
        </svg>
        下载的音乐
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
function onAddPlaylistClick(): void {
  console.log('Add playlist clicked')
}

function changePlaylist(name: string): void {
  console.log('切换到播放列表:', name)
}
</script>

<style scoped>
.nav-item {
  color: #fff;
  text-decoration: none;
}
.nav-item:hover {
  color: #ccc;
  text-decoration: none;
}
</style>
