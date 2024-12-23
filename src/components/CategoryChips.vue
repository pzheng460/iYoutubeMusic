<template>
  <div class="category-chips">
    <div
      v-for="(chip, index) in chips"
      :key="index"
      class="chip"
      :class="{ active: chip === activeChip }"
      @click="setActiveChip(chip)"
    >
      {{ chip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  chips: string[];
}>();

const emit = defineEmits<{
  (e: "chipSelected", chip: string): void;
}>();

const activeChip = ref(props.chips[0] ?? "");

function setActiveChip(chip: string): void {
  activeChip.value = chip;
  emit("chipSelected", chip);
}
</script>
