<template>
  <div>
    <b-navbar class="nav-trans" toggleable="lg">
      <b-navbar-brand href="#">
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
            The more Javascript, the better.
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="showMenu" id="expandable-menu">
        <div class="menu-items">
          <h2>Projects</h2>
          <h2>Work History</h2>
          <h2>About</h2>
          <h2>Fun Stuff</h2>
          <div class="contact-list">
            <p>
              <a href="mailto: aaron@oceansyachting.com">
                <span>bartschED@gmail.com</span>
              </a>
            </p>
            <p>
              <a href="tel:203-243-0191">
                <span aria-hidden="true"></span> 774.271.2941
              </a>
            </p>
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
  }
}
</script>

<style>
</style>
