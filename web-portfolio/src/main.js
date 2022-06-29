import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Sidebar from './components/Sidebar.vue'

const app = createApp(App)
app.component('app-side', Sidebar)
app.use(router)

app.mount('#app')
