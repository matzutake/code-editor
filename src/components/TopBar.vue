<template>
  <header class="top-bar">
    <img src="@/assets/svg/reset.svg" alt="Reset" class="icon" />
    <img src="@/assets/svg/run.svg" alt="Run" class="icon" />

    <language-select v-model="language" :options="['Python', 'Go']" placeholder="Язык" />
  </header>
</template>

<script setup lang="ts">
import LanguageSelect from './LanguageSelect.vue'
import { ref } from 'vue'

const language = ref('Python')
</script>

<style scoped>
.top-bar {
  grid-area: top-bar;
  background-color: #1e1e1e;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.icon {
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  transition: 200ms;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
