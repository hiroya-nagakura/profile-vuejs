<template>
  <section class="home-about">
    <div class="section__title fade-in">
      <div class="section__title-text">02. Work</div>
    </div>
    <v-container class='fade-in'>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/img/profile.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url='url' />
    </v-container>
  </section>
</template>

<script>
import AppButton from './AppButton.vue'
import ScrollReveal from 'scrollreveal'

export default {
  data() {
    return {
      buttonText: '詳しく見る',
      url: '/about'
    }
  },
  components: {
    AppButton
  },
  mounted() {
      ScrollReveal().reveal('.fade-in', {
        duration: 800,
        viewFactor: 0.5,
        origin: 'bottom',
        distance: '50px',
      });
  }
}
</script>

<style lang="scss" scoped>
  .home-about__contents {
    margin-top: 20px;
    justify-content: center;
  
    &-img {
      text-align: center;
    }
  
    &-text {
      word-wrap: break-word;
    }
  }
</style>