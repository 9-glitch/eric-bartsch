<template>
  <div>
    <div class="menu-items">
      <div class="menu-links" v-for="link in links" v-bind:key="link" v-on:click="pageToRender = link">
        <h2>{{link}}</h2>
      </div>

      <!-- <a href="/projects"> -->
        <h2 v-bind:value="currentPage" v-on:click="currentPage = 'projects'">Projects</h2>
      <!-- </a> -->
      <a href="/work-history">
        <h2>Work History</h2>
      </a>
      <a href="/about">
        <h2>About</h2>
      </a>
      <a href="/fun-stuff">
        <h2>Fun Stuff</h2>
      </a>
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
    <component v-bind:is="currentPageComponent" />
  </div>
</template>

<script>
import projects from '../components/Projects.vue'
export default {
  name: 'SideMenu',
  data() {
    return {
      pageToRender: '',
      links: ['Projects', 'WorkHistory', 'About', 'FunStuff']
    }
  },
  props: [
    'currentPage'
  ],
  methods: {
    toggleNewPage(newPage, currentPage) {
      if (newPage === currentPage) {
        console.log(currentPage)
        return
      } else {
        this.pageToRender = newPage
      }
    }
  },
  components: {
    projects
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