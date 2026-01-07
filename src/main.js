import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import router from './router'

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init()


library.add(faPhone);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
