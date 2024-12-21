import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('typescript')
  const formattedCode = computed(() => {
    if (language.value === 'typescript') {
      return `// some code...`
    }
    return `// some code...`
  })
  return { language, formattedCode }
})
