<template>
  <div>
    <CategoryChips :chips="chips" @chipSelected="onChipSelected" />
    <h2 class="section-title">热门推荐</h2>
    <div class="songs">
      <SongCard
        v-for="(song, index) in filteredHotSongs"
        :key="index"
        :song="song"
        @play="onPlaySong"
      />
    </div>

    <h2 class="section-title">为你推荐</h2>
    <div class="songs">
      <SongCard
        v-for="(song, index) in filteredPersonalSongs"
        :key="index"
        :song="song"
        @play="onPlaySong"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import CategoryChips from "@/components/CategoryChips.vue";
import SongCard from "@/components/SongCard.vue";
import type { Song } from "@/models/Song";

// 模拟数据
const hotSongs = ref<Song[]>([
  {
    title: "浮生",
    artist: "刘莉玮",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "起风了",
    artist: "买辣椒也用券",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "坠落星空",
    artist: "艾辰",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "麻将",
    artist: "李荣浩",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "我的名字",
    artist: "焦迈奇",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "追光者",
    artist: "岑宁儿",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
]);

const personalSongs = ref<Song[]>([
  {
    title: "往后余生",
    artist: "马良",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "晴天",
    artist: "周杰伦",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
  {
    title: "孤勇者",
    artist: "陈奕迅",
    cover: "/WeChat41761aef1593e4e9b0f4343fb55aee3e.jpg",
  },
]);

// 分类
const chips = ref<string[]>(["全部", "热门", "流行", "摇滚", "民谣", "电子"]);
const activeChip = ref("全部");

// 假设有搜索值（可以与 TopBar 同步）
const searchTerm = ref("");

// 根据 searchTerm 对歌曲进行简单过滤
const filteredHotSongs = computed(() => {
  return hotSongs.value.filter((song) => {
    const v = searchTerm.value.toLowerCase();
    return (
      song.title.toLowerCase().includes(v) ||
      song.artist.toLowerCase().includes(v)
    );
  });
});
const filteredPersonalSongs = computed(() => {
  return personalSongs.value.filter((song) => {
    const v = searchTerm.value.toLowerCase();
    return (
      song.title.toLowerCase().includes(v) ||
      song.artist.toLowerCase().includes(v)
    );
  });
});

function onPlaySong(song: Song): void {
  // 播放歌曲
  console.log("开始播放：", song);
}

function onChipSelected(chip: string): void {
  activeChip.value = chip;
  console.log("切换分类：", chip);
}
</script>
