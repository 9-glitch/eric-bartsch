<template>
  <div id="footer">
    <div class="text-center">
        <h1 class="footer-header-padding text-color-light">Contact</h1>
        <div class="container-fluid custom-container">
          <div class="section-text-accent"></div>
          <div class="contact-list">
            <a href="mailto: bartsched@gmail.com">
              <font-awesome-icon class="fa-icon env" :icon="{ prefix: 'fas', iconName: 'envelope' }" />
            </a>
            <a href="tel:7742712941">
              <font-awesome-icon class="fa-icon" :icon="{ prefix: 'fas', iconName: 'phone' }" />
            </a>
            <a href="https://www.linkedin.com/in/bartsched/" target="_blank" rel="noreferrer">
              <font-awesome-icon class="fa-icon li" :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
            </a>
            <a href="https://github.com/rickyb0127/" target="_blank" rel="noreferrer">
              <font-awesome-icon class="fa-icon li" :icon="{ prefix: 'fab', iconName: 'github' }" />
            </a>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SectionFooter',
  data() {
    return {
    }
  }
}
</script>

<style>
</style>