<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
    <HomeWork/>
    <HomeSkill/>
  </section>
</template>

<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
import HomeSkill from './HomeSkill.vue'
import ScrollReveal from 'scrollreveal'

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeWork,
    HomeSkill
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