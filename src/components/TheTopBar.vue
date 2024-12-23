<template>
  <div class="top-bar">
    <div class="search-container">
      <svg
        class="search-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        @click="onSearchIconClick"
      >
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
      <input
        type="text"
        class="search"
        placeholder="搜索音乐..."
        v-model="searchValue"
        @input="onInput"
      />
      <button class="search-button" @click="onSearchClear">
        <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
          <path
            d="M19 6.41L17.59 5 12 10.59 
              6.41 5 5 6.41 10.59 12 
              5 17.59 6.41 19 12 13.41 
              17.59 19 19 17.59 13.41 
              12z"
          />
        </svg>
      </button>
    </div>

    <div class="user-profile">
      <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
        <path
          d="M12 12c2.21 0 4-1.79 
            4-4s-1.79-4-4-4-4 1.79-4 
            4 1.79 4 4 4zm0 2c-2.67 
            0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

const searchValue = ref('')

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function onSearchIconClick(): void {
  // 可以在这里做聚焦逻辑
}

function onInput(): void {
  emit('search', searchValue.value)
}

function onSearchClear(): void {
  searchValue.value = ''
  emit('search', '')
}
</script>
