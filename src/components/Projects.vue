<template>
  <div>
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="component-bg" v-bind:class="{ blurContent:showMenu }">
      <div class="section-wrapper">
        <h1 class="section-header-padding text-color-primary text-center">Projects</h1>
        <div class="container custom-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <a href="http://www.auracommunityhealth.com" target="_blank">
                  <img class="project-img-thumb" src="../assets/images/aura-community-health-thumb.png" alt="Aura Community Health" />
                </a>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <a href="http://www.oceansyachting.com" target="_blank">
                  <img class="project-img-thumb" src="../assets/images/oceans-yachting-thumb.png" alt="Oceans Yachting" />
                </a>
              </div>
              <!-- <div class="col-md-6 col-sm-12 col-xs-12">
                <a href="https://voodoo-artisanal-sauces.herokuapp.com/" target="_blank">
                  <img class="project-img-thumb" src="https://picsum.photos/250/250/?image=59" alt="Voodoo Artisanal Sauces" />
                </a>
              </div> -->
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