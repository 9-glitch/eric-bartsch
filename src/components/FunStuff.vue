<template>
  <div id="body">
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="component-bg" v-bind:class="{ blurContent:showMenu }">
      <div class="section-wrapper">
        <h1 class="section-header-padding text-color-primary text-center">Fun Stuff</h1>
        <div class="container-fluid custom-container">
          <div class="section-container">
            <div class="section-text-accent"></div>
            <div class="text-center">
              coming soon!
            </div>
          </div>
        </div>
      </div>
      <section-footer />
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import SectionFooter from '../components/SectionFooter.vue'

export default {
  name: 'FunStuff',
  data() {
    return {
      showMenu: false,
      currentPage: 'fun-stuff'
    }
  },
  components: {
    SideMenu,
    SectionFooter
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