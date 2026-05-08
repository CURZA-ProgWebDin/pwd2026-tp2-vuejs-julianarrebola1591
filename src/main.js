import { createApp } from 'vue'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


import App from './App.vue'

library.add(faUserSecret)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')