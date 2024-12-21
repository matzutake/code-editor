import './assets/main.css'
import 'normalize.css'
import { loader } from '@guolao/vue-monaco-editor'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
  },
})

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
