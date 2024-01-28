import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import configurePlugins from './plugins'
import configureComponents from './components'

import './assets/scss/app.scss'

const app = createApp(App)

configurePlugins(app);
configureComponents(app);

app.use(createPinia())
app.use(router)

app.mount('#app')
