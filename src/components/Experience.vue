<template>
  <div>
    <side-menu @sendShowMenuStatus="getShowMenuStatus" />
    <div class="component-bg" v-bind:class="{ blurContent:showMenu }">
      <div class="section-wrapper">
        <h1 class="section-header-padding text-color-primary text-center">Experience</h1>
        <div class="container custom-container">
          <div class="section-container">
            <div class="section-text-accent"></div>
            <h2 class="text-color-secondary">Work History</h2>
            <div class="work-history-title">
              <div class="row custom-row">
                FitNerds/FloatNerds | Frontend Developer | January 2017 - January 2018
              </div>
              <p></p>
              <h6>Portal</h6>
              <ul>
              <li>Helped architect and plan the design of our member management and POS web application, utilizing REST APIS and a grails backend</li>  
              <li>Created custom Angular directives for front-end features, such as ahead of appointment waiver system, membership credit dashboard and membership credit history</li> 
              <li>Created a separate user facing config of our application to allow customers to view their membership plans and credits</li> 
              <li>Created a waiver system to allow facilities to upload their current waivers and allow customers to sign these waivers ahead of their scheduled appointment</li>
              </ul>
              <h6>Marketing Splash Page</h6>
              <ul>
                <li>Created visually appealing splash page to promote our “early nerds” program</li>
                <li>Implemented a sign up form to integrate with Google Sheets API</li>
                <li>Responsible for mobile responsive design</li>
              </ul>
            </div>
            <div class="work-history-title">
              <div class="row custom-row">
                American Express | Software Engineer | July 2015 - July 2016
              </div>
              <p></p>
              <h6>WSP Automation</h6>
              <ul>
                <li>Responsible for architecture of automated testing framework utilizing HP UFT to conduct regression tests within WSP-PA division</li>
                <li>Connected API and GUI test features of UFT in order to drive validation from SOAP responses to the application UI</li>
                <li>Reduced the time of QA engineers to regression test by 50%</li>
              </ul>
              <h6>Selenium Wrapper</h6>	
              <ul>
                <li>Automated testing framework utilizing Selenium’s interface, implemented to test and deploy applications within GCAP division</li>
                <li>Implemented event handlers for finding an attribute, searching a web table, and verifying a dropdown selection</li>
              </ul>
              <h6>BlueTube</h6>
              <ul> 			
                <li>Internal company site used to share and upload videos</li>
                <li>Responsible for integration of FFmpeg converter, which allowed for various video formats to be uploaded and converted into standard .mp4 extension allowing for native playback with HTML5 video</li>
              </ul>
            </div>
          </div>
          <div class="education-container">
            <h2 class="text-color-secondary">Education</h2>
            <div class="education-item">
              <div class="row custom-row">
                Galvanize - 6 month accelerated web development course
              </div>
              <p></p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
            <div class="education-item">
              <div class="row custom-row">
                Johnson & Wales University
              </div>
              <p></p>
              <ul>
                <li>BS Hospitality Management</li>
                <li>AS Restaurant Management</li>
              </ul>
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
  name: 'Experience',
  data() {
    return {
      showMenu: false,  
      currentPage: 'experience'
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