<template>
  <section class="home">
    <HomeHero id='home'/>
    <HomeAbout id='about'/>
    <HomeWork id='work'/>
    <HomeSkill id='skill'/>
    <HomeContact id='contact'/>
  </section>
</template>

<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
import HomeSkill from './HomeSkill.vue'
import HomeContact from './HomeContact.vue'
import ScrollReveal from 'scrollreveal'

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeWork,
    HomeSkill,
    HomeContact
  },
  mounted() {
    ScrollReveal().reveal('.fade-in', {
      duration: 500,
      viewFactor: 0.5,
      origin: 'bottom',
      distance: '100px',
    });
  }
}
</script>

<style lang='scss' scoped>
  .home {
    padding-bottom: 50px;
  }
</style>