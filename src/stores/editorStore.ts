import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    editorValue: 'function hello() { console.log("Hello, world!"); }',
  }),
  actions: {
    setEditorValue(value: string) {
      this.editorValue = value
    },
  },
})
