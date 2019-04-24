import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/stylesheets/application.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Welcome from './components/Welcome.vue'
import Projects from './components/Projects.vue'
import WorkHistory from './components/WorkHistory.vue'
import About from './components/About.vue'
import FunStuff from './components/FunStuff.vue'

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
      path: '/work-history',
      name: 'work history',
      component: WorkHistory
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