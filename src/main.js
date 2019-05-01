import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/stylesheets/application.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Welcome from './components/Welcome.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import About from './components/About.vue'
import FunStuff from './components/FunStuff.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/fun-stuff',
      name: 'fun stuff',
      component: FunStuff
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})