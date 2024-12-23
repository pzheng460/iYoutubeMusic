<template>
  <div class="player">
    <div class="song-info">
      <div
        class="song-image"
        :style="{ backgroundImage: 'url(' + currentSong.cover + ')' }"
      />
      <div>
        <div class="song-title">{{ currentSong.title }}</div>
        <div class="song-artist">{{ currentSong.artist }}</div>
      </div>
    </div>

    <div class="controls">
      <div class="control-buttons">
        <!-- 上一首 -->
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="currentColor"
          @click="onPrev"
        >
          <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
        </svg>

        <!-- 播放/暂停 -->
        <svg
          height="40"
          viewBox="0 0 24 24"
          width="40"
          fill="currentColor"
          @click="togglePlay"
        >
          <path v-if="!isPlaying" d="M8 5v14l11-7z" />
          <path v-else d="M6 6h4v12H6zm8 0h4v12h-4z" />
        </svg>

        <!-- 下一首 -->
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="currentColor"
          @click="onNext"
        >
          <path d="M6 6v12l8.5-6L6 6zm9 0h2v12h-2V6z" />
        </svg>
      </div>

      <div class="progress" @click="seek">
        <div class="progress-bar" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <div class="volume-controls">
      <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
        <path
          d="M3 9v6h4l5 5V4L7 
            9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05
            c1.48-.73 2.5-2.25 2.5-4.02zM14 
            3.23v2.06c2.89.86 5 3.54 
            5 6.71s-2.11 5.85-5 6.71v2.06
            c4.01-.91 7-4.49 7-8.77
            s-2.99-7.86-7-8.77z"
        />
      </svg>
      <div class="volume">
        <div class="progress" @click="changeVolume">
          <div class="progress-bar" :style="{ width: volumePercent + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Song } from '@/models/Song'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  currentSong: Song
  isPlaying: boolean
  progressPercent: number
  volumePercent: number
}>()

const emit = defineEmits<{
  (e: 'togglePlay'): void
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'seek', percent: number): void
  (e: 'changeVolume', percent: number): void
}>()

function togglePlay() {
  emit('togglePlay')
}

function onPrev() {
  emit('prev')
}

function onNext() {
  emit('next')
}

function seek(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const percent = (clickX / rect.width) * 100
  emit('seek', percent)
}

function changeVolume(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const percent = (clickX / rect.width) * 100
  emit('changeVolume', percent)
}
</script>
