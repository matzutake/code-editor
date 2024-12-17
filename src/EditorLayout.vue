<template>
  <main class="editor-layout">
    <top-bar class="top-bar" />
    <code-workspace class="workspace" />
    <output-block class="output" />
    <terminal-block class="terminal" />
  </main>
</template>

<script setup lang="ts">
import TopBar from '@/components/top-bar/TopBar.vue'
import OutputBlock from '@/components/output-block/OutputBlock.vue'
import CodeWorkspace from '@/components/code-workspace/CodeWorkspace.vue'
import TerminalBlock from '@/components/terminal-block/TerminalBlock.vue'
</script>

<style lang="scss" scoped>
.editor-layout {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template:
    'topbar topbar topbar topbar topbar' 4rem
    'workspace workspace workspace output output' 1fr
    'workspace workspace workspace output output' 1fr
    'workspace workspace workspace terminal terminal' 1fr;
  gap: 1rem;
  padding: 1rem;
}

.top-bar {
  grid-area: topbar;
}

.output {
  grid-area: output;
}

.workspace {
  grid-area: workspace;
}

.terminal {
  grid-area: terminal;
}
</style>
