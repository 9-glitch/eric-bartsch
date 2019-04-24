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

    <div class="container">
      <div class="main-text">
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
            I love simple clean design.
            I am currently looking for freelance as well as employment opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="showMenu" id="expandable-menu">
        <sidemenu />
      </div>
    </transition>

    <div>
      <img class="main-bg" src="../assets/images/laptop-bg.jpg">
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      showMenu: false,
      knifeShouldReset: false
    }
  },
  methods: {
    activateKnifeAnimation() {
      this.knifeShouldReset = true;
    }
  },
  components: {
    'sidemenu': SideMenu
  }
}
</script>

<style>
</style>
