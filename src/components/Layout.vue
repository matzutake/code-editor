<template>
  <div class="layout">
    <top-bar class="top-bar" />
    <code-editor class="code-editor" />
    <console-output class="console-output" />
    <about-block class="about-block" />
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
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'top-bar top-bar top-bar'
    'code-editor code-editor about-block'
    'console-output console-output about-block';
  gap: 1rem;
  padding: 1rem;
}
</style>
