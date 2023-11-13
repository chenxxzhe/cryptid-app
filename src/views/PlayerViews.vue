<script setup lang="ts">
import OptionColumn from '../components/OptionColumn.vue'

const terrain = [
  { icon: '/1-desert.svg', text: '≤0' },
  { icon: '/2-forest.svg', text: '≤0' },
  { icon: '/3-mountain.svg', text: '≤0' },
  { icon: '/4-swamp.svg', text: '≤0' },
  { icon: '/5-lake.svg', text: '≤0' },
  { icon: '/6-desert-forest.svg', text: '≤1' },
  { icon: '/7-desert-mountain.svg', text: '≤1' },
  { icon: '/8-desert-swamp.svg', text: '≤1' },
  { icon: '/9-desert-lake.svg', text: '≤1' },
  { icon: '/10-forest-mountain.svg', text: '≤1' },
  { icon: '/11-forest-swamp.svg', text: '≤1' },
  { icon: '/12-forest-lake.svg', text: '≤1' },
  { icon: '/13-mountain-swamp.svg', text: '≤1' },
  { icon: '/14-mountain-lake.svg', text: '≤1' },
  { icon: '/15-swamp-lake.svg', text: '≤1' },
]
const animal = [
  { icon: '/16-puma.svg', text: '≤2' },
  { icon: '/17-bear.svg', text: '≤2' },
  { icon: '/18-puma-bear.svg', text: '≤1' },
]
const structures = [
  { icon: '/19-shack.svg', text: '≤2' },
  { icon: '/20-boulder.svg', text: '≤2' },
  { icon: '/21-white-structure.svg', text: '≤3' },
  { icon: '/22-blue-structure.svg', text: '≤3' },
  { icon: '/23-green-structure.svg', text: '≤3' },
  { icon: '/24-black-structure.svg', text: '≤3' },
]
</script>

<template>
  <div id="current-player">
    <!-- <img
      class="back-arrow"
      src="/0-back-arrow.svg"
      alt="Arrow pointing left"
    /> -->
    <input class="player-name" placeholder="玩家名称" />
    <!-- <img
      class="fwd-arrow"
      src="/0-back-arrow.svg"
      alt="Arrow pointing right"
    /> -->
  </div>
  <div id="player-container" class="player-container">
    <OptionColumn title="地形" :items="terrain" />
    <OptionColumn title="动物" :items="animal" />
    <OptionColumn title="建筑物" :items="structures" />
  </div>
</template>

<style scoped>
#current-player {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.player-name {
  height: 52px;
  width: 180px;
  border-radius: 50px;
  background-color: #bee3f8;
  font-size: 14px;
  font-weight: bold;
  color: #2c5282;
  cursor: pointer;
  border: none;
  text-align: center;
}

::placeholder {
  opacity: 0.4;
}

.fwd-arrow {
  transform: rotate(180deg);
  cursor: pointer;
}

.back-arrow {
  cursor: pointer;
}

.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 60px 0;
}
</style>
