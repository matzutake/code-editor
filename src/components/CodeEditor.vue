<template>
  <div class="code-editor">
    <vue-monaco-editor
      v-model:value="code"
      theme="vs-dark"
      :options="MONACO_EDITOR_OPTIONS"
      @mount="handleMount"
    />
  </div>
</template>

<script lang="ts" setup>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const code = ref('// some code...')
const editorRef = shallowRef()
const handleMount = (editor) => (editorRef.value = editor)
</script>

<style scoped>
.code-editor {
  grid-area: code-editor;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #1e1e1e;
}
</style>
