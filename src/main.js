import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'