import "./assets/style.css"
import "./assets/element-ui.scss"
import "./assets/index.scss"
import "./assets/mixin.scss"
import "./assets/sidebar.scss"
import "./assets/transition.scss"
import "./assets/variables.scss"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'

const app = createApp(App, {
  compilerOptions: {
    isCustomElement: (tag) => tag === 'SuubModal'
  }
})

app.use(router)
app.use(store)
app.mount('#app')
