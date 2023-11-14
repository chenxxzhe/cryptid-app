<script setup lang="ts">
// Column of filter options

import { ref, watch } from 'vue'

type Item = { icon: string; text: string }

const props = defineProps<{
  title: string
  items: Item[]
}>()

const expand = ref(true)
const list = ref<Array<Item & { active: boolean }>>([])
watch(
  () => props.items,
  (newVal) => {
    // 增加不在XX的选项
    list.value = newVal.map((item) => ({ ...item, active: true }))
  },
  { immediate: true },
)

const toggleExpand = () => {
  expand.value = !expand.value
}
const toggleButton = (key: number) => {
  const cur = list.value[key].active
  list.value[key].active = !cur
}
</script>

<template>
  <button class="section-title-button" @click="toggleExpand">
    {{ title }}
    <img
      :class="['arrow-up', !expand ? 'arrow-down' : '']"
      src="/0-down-arrow.svg"
      alt="Arrow pointing up"
    />
  </button>
  <section v-show="expand" class="clues-section">
    <button
      v-for="(item, index) in list"
      :key="index"
      :class="['clue-button', !item.active ? 'clue-button--clicked' : '']"
      @click="() => toggleButton(index)"
    >
      <img class="clue-button-img" :src="item.icon" />
      <span class="clue-button-number">{{ item.text }}</span>
    </button>
  </section>
</template>

<style scoped>
.clues-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 320px;
}

.section-title-button {
  height: 52px;
  width: 320px;
  position: relative;
}

.arrow-up {
  position: absolute;
  right: 5px;
  top: 6px;
  transform: scale(0.75) rotate(180deg);
  transition: 200ms;
}

.arrow-down {
  transform: scale(0.75);
  transition: 200ms;
}

.clue-button {
  height: 96px;
  width: 96px;
  position: relative;
}

.clue-button > * {
  pointer-events: none;
}

.clue-button--clicked {
  opacity: 30%;
}

.clue-button-img {
  height: 70%;
  width: 70%;
}

.clue-button-number {
  position: absolute;
  right: 5px;
  bottom: 3px;
}
</style>
