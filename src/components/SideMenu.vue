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
    <transition name="slide-side-menu">
      <div v-if="showMenu" id="expandable-menu">
        <div class="menu-items">
          <div class="menu-links" v-for="link in links" v-bind:key="link.url">
            <div class="link-container">
              <router-link :to="link.url">
                <h2>{{link.name}}</h2>
              </router-link>
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
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      showMenu: false,
      knifeShouldReset: false,
      showNewPage: false,
      pageToRender: '',
      links: [
        {name: 'Experience', url: '/experience'}, 
        {name: 'Projects', url: '/projects'},
        {name: 'About', url: 'about'}
        // {name: 'Fun Stuff', url: 'fun-stuff'}
      ]
    }
  },
  methods: {
    toggleNewPage(newPage, currentPage) {
      if (newPage === currentPage) {
        return
      } else {
        this.pageToRender = newPage
      }
    },
    activateKnifeAnimation() {
      this.knifeShouldReset = true;
      this.$emit('sendShowMenuStatus', this.showMenu)
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
  computed: {
    currentPageComponent: function () {
      return this.pageToRender.toLowerCase()
    }
  }
}
</script>

<style>
</style>