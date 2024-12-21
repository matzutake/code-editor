<template>
  <div class="code-editor">
    <vue-monaco-editor
      v-model:value="code"
      :language="language"
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
  fontSize: 18,
  minimap: {
    enabled: false,
  },
}

const code = ref('// some code...')
const editorRef = shallowRef()
const language = ref('python')
const handleMount = (editor: unknown) => (editorRef.value = editor)
</script>

<style scoped>
.code-editor {
  grid-area: code-editor;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #1e1e1e;
  font-size: 2rem;
}
</style>
