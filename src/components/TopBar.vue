<template>
  <header class="top-bar">
    <span>Reset</span>
    <select>
      <option>File</option>
      <option>File</option>
      <option>File</option>
    </select>

    <span>Run</span>
    <span>Debug</span>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.top-bar {
  grid-area: top-bar;
  background-color: #1e1e1e;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
