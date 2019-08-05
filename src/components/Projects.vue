<template>
  <div>
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="component-bg" v-bind:class="{ blurContent:showMenu }">
      <div class="section-wrapper">
        <h1 class="section-header-padding text-color-primary text-center">Projects</h1>
        <div class="container-fluid custom-container">
          <div class="section-container">
            <div class="section-text-accent"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <a href="http://www.auracommunityhealth.com" target="_blank" rel="noreferrer">
                    <img class="project-img-thumb" src="../assets/images/aura-community-health-thumb.png" alt="Aura Community Health" />
                  </a>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <a href="http://www.oceansyachting.com" target="_blank" rel="noreferrer">
                    <img class="project-img-thumb" src="../assets/images/oceans-yachting-thumb.png" alt="Oceans Yachting" />
                  </a>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <a href="https://fusion-home-care.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img class="project-img-thumb" src="../assets/images/fusion-home-care-thumb.png" alt="Fusion Home Care" />
                  </a>
                </div>
              </div>
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
  name: 'Projects',
  data() {
    return {
      showMenu: false,
      currentPage: 'projects'
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