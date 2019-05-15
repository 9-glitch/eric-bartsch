<template>
  <div>
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="component-bg" v-bind:class="{ blurContent:showMenu }">
      <div class="section-wrapper">
        <h1 class="section-header-padding text-color-primary text-center">About</h1>
        <div class="container-fluid custom-container">
          <div class="section-text-accent"></div>
          <div class="text-center">
            <img class="headshot-img" src="../assets/images/headshot.jpg" />
          </div>
          <div class="section-text">
            <p>
              Oh hello there, my name is Eric but I usually go by Ricky.
              I am a recent transplant from the hospitality industry into the field of software development.
              In the summer of 2015 I embarked on a grueling 6 month accelerated full stack web development program at Galvanize in Boulder, Colorado.
              Shortly after graduation, I took a job at American Express as a software engineer.
              While there, I worked on technologies aiding with the business facing card members.
              I worked primarily on building out testing frameworks to assist development on our customer service platform.
              On my own I have been working hard on learning as much as I can about Javascript and other frontend frameworks such as React, Angular and Vue.
              I have worked diligently to learn as much as I can to launch my new career. 
              I have built several websites for friends and clients. 
              I still have a passion for the hospitality industry and helping others but I have decided to embark on a new journey in one of my other passions, computers and technology.
              In my spare time I still love to cook, try new restaurants, and play video games. 
              I look forward to meeting you.
            </p>
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
  name: 'About',
  data() {
    return {
      showMenu: false,
      currentPage: 'about'
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