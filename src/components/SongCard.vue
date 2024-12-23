<template>
  <div class="song-card" @click="onPlaySong">
    <div
      class="song-image"
      :style="{ backgroundImage: 'url(' + song.cover + ')' }"
    >
      <div class="text-container">
        <div class="song-title">{{ song.title }}</div>
        <div class="song-artist">{{ song.artist }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { Song } from "@/models/Song";

const props = defineProps<{
  song: Song;
}>();

const emit = defineEmits<{
  (e: "play", song: Song): void;
}>();

function onPlaySong(): void {
  emit("play", props.song);
}
</script>
