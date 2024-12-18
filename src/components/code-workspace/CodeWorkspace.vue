<template>
  <div ref="editorContainerRef" style="height: 400px; width: 100%"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useEditorStore } from '../../stores/editorStore'
import * as monaco from 'monaco-editor'

export default defineComponent({
  setup() {
    const editorContainerRef = ref<HTMLElement | null>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const editor = ref<any>(null)
    const { editorValue, setEditorValue } = useEditorStore()

    onMounted(() => {
      if (editorContainerRef.value) {
        initializeMonacoEditor()
      } else {
        console.error('Editor container not found!')
      }
    })

    const initializeMonacoEditor = () => {
      if (editorContainerRef.value) {
        editor.value = monaco.editor.create(editorContainerRef.value, {
          value: editorValue,
          language: 'typescript',
          theme: 'vs-dark',
          automaticLayout: true,
        })

        editor.value.onDidChangeModelContent(() => {
          if (editor.value) {
            setEditorValue(editor.value.getValue())
          }
        })
      }
    }

    watch(
      () => editorValue,
      (newValue) => {
        if (editor.value) {
          editor.value.setValue(newValue)
        }
      },
    )

    return { editorContainerRef }
  },
})
</script>
