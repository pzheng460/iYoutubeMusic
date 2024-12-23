<template>
  <div class="container">
    <!-- 侧边栏 -->
    <TheSidebar />

    <!-- 主体：上方搜索栏 + 路由视图 -->
    <div class="main">
      <TheTopBar @search="onSearch" />

      <!-- 路由出口 -->
      <router-view />
    </div>
  </div>

  <!-- 全局播放器 -->
  <ThePlayer
    :currentSong="currentSong"
    :isPlaying="isPlaying"
    :progressPercent="progressPercent"
    :volumePercent="volumePercent"
    @togglePlay="togglePlay"
    @prev="onPrev"
    @next="onNext"
    @seek="onSeek"
    @changeVolume="onChangeVolume"
  />
</template>

<script lang="ts" setup>
import TheSidebar from '@/components/TheSidebar.vue'
import TheTopBar from '@/components/TheTopBar.vue'
import ThePlayer from '@/components/ThePlayer.vue'
import { ref } from 'vue'
import type { Song } from '@/models/Song'

// 全局播放状态
const currentSong = ref<Song>({
  title: 'Test Song',
  artist: 'Test Artist',
  cover: '@/assets/test.jpg'
})

const isPlaying = ref<boolean>(false)
const progressPercent = ref<number>(30)
const volumePercent = ref<number>(60)

// 处理搜索输入（这里仅打印，实际可用于全局搜索）
function onSearch(value: string) {
  console.log('Global Search Value:', value)
}

// 播放器操作
function togglePlay() {
  isPlaying.value = !isPlaying.value
}
function onPrev() {
  console.log('上一首')
}
function onNext() {
  console.log('下一首')
}
function onSeek(percent: number) {
  progressPercent.value = percent
}
function onChangeVolume(percent: number) {
  volumePercent.value = percent
}
</script>
