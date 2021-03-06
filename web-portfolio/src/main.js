import { createApp } from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import Sidebar from './components/Sidebar.vue'

import Home from './views/Home.vue';


const app = createApp(App)
app.component('app-home', Home)
app.component('app-side', Sidebar)
app.use(router)
app.use(moment)

app.mount('#app')
