<template>
  <div>
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="container">
      <div class="main-text" v-bind:class="{ blurContent:showMenu }">
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
    <div>
      <img class="main-bg" src="../assets/images/laptop-bg.jpg" />
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'

export default {
  name: 'Welcome',
  data() {
    return {
      currentPage: 'Welcome',
      showMenu: false
    }
  },
  components: {
    SideMenu
  },
  methods: {
    getShowMenuStatus(value) {
      this.showMenu = value
    }
  }
}
</script>

<style>
</style>
