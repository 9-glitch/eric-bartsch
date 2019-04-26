<template>
  <div>
    <b-navbar class="nav-trans" toggleable="lg">
      <b-navbar-brand href="/">
        <img class="nav-brand-img" src="../assets/images/avatar-headshot.jpeg">
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <b-navbar-brand v-on:click="showMenu = !showMenu, activateKnifeAnimation()">
            <img class="nav-menu-img" v-bind:class="{ knifeDown:showMenu, knifeUp:!showMenu&&knifeShouldReset }" src="../assets/images/knife.png" />
          </b-navbar-brand>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <div v-if="currentPage === 'Welcome'">
      <transition name="foo">
        <div class="container">
          <div class="main-text" v-bind:class="{ blurText:showMenu }">
            <div class="container custom-container">
              <div class="wrapper text-center">
                <div class="main-text-name">
                  Eric Bartsch 
                </div>
                <br>
                <div class="main-text-accent"></div>
                <br>
                <div class="main-text-bio">
                I am a former chef turned full stack developer.
                I specialize in JavaScript in both the front and backend.
                I am currently available for freelance work as well as employment opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-else>
      <transition name="slide-component">
        <component v-bind:is="currentPageComponent" class="component-wrapper"/>
      </transition>
    </div>

    <transition name="slide-side-menu">
      <div v-if="showMenu" id="expandable-menu">
        <div class="menu-items">
          <div class="menu-links" v-for="link in links" v-bind:key="link">
            <div class="link-container" v-on:click="pageToRender = link, toggleCurrentPage(pageToRender)">
              <h2>{{link}}</h2>
            </div>
          </div>
          <div class="contact-list">
            <h6>Contact Me</h6>
            <a href="mailto: bartsched@gmail.com">
              <h6>bartschED@gmail.com</h6>
            </a>
            <a href="tel:7742712941">
              <h6>774.271.2941</h6>
            </a>
          </div>
        </div>
      </div>
    </transition>

    <div>
      <img class="main-bg" src="../assets/images/laptop-bg.jpg">
    </div>
  </div>
</template>

<script>
import Projects from '../components/Projects.vue'
import WorkHistory from '../components/WorkHistory.vue'
import About from '../components/About.vue'
import FunStuff from '../components/FunStuff.vue'

export default {
  name: 'Welcome',
  data() {
    return {
      showMenu: false,
      knifeShouldReset: false,
      showNewPage: false,
      currentPage: 'Welcome',
      pageToRender: '',
      links: ['Projects', 'Work History', 'About', 'Fun Stuff']
    }
  },
  methods: {
    activateKnifeAnimation() {
      this.knifeShouldReset = true;
    }, 
    toggleCurrentPage(newPage) {
      if(newPage != this.currentPage) {
        this.currentPage = newPage
        this.showMenu = false
      } else {
        return 
      }
    }
  },
  components: {
    Projects,
    WorkHistory,
    About,
    FunStuff
  },
  computed: {
    currentPageComponent: function () {
      return this.pageToRender.replace(/\s+/g, '-').toLowerCase()
    }
  }
}
</script>

<style>
</style>
