<template>
  <div class="layout">
    <top-bar />
    <code-editor />
    <console-output />
    <about-block />
  </div>
</template>

<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue'
import TopBar from '@/components/TopBar.vue'
import ConsoleOutput from '@/components/ConsoleOutput.vue'
import AboutBlock from '@/components/AboutBlock.vue'
</script>

<style scoped>
.layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 18rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'top-bar top-bar top-bar'
    'code-editor code-editor about-block'
    'console-output console-output about-block';
  background-color: #121212;
  padding: 1rem;
  gap: 1rem;
}
</style>
