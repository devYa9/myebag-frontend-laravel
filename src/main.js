import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import globalConfig from './plugins/globalConfig'
import { Icon } from '@iconify/vue';
import alert from './plugins/alert'
import apiErrorHandler  from './plugins/apiErrorHandler'

import '@/assets/css/main.css'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)
  .use(alert)
  .use(apiErrorHandler)

  .component('icon', Icon)
  
  .mount('#app')
