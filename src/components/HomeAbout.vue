<template>
    <section class="home-about">
      <div class="section__title">
        
        <div class="section__title-text">
          <v-icon 
            large
            class='section__title-icon'
          >{{ icon }}</v-icon>
          About Me
          </div>
      </div>
      <v-container>
        <v-row class="home-about__contents fade-in">
          <v-col md="9" class="home-about__contents-text">
            <p>1993年鹿児島生まれの{{ calcAge }}歳、ヒロヤと申します。</p>
            <p>鹿児島大学大学院農学研究科卒。デンプンに作用する酵素について研究をしていました。その後、製パン会社に就職し、パン生地の作成を主に担当。</p>
            <p>毎日の仕事をこなしていく中で、今の仕事を一生続けていくことに限界を感じ以前から興味のあったプログラミングを始めてみる</p>
            <p>自分の手で作品を作り上げることに楽しさを感じ、学習を進める</p>
            <p>AWS, Docker, CICLパイプラインなどを盛り込んだポートフォリオを独学で完成させ、現在転職活動中。</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<script>
import { mdiHumanGreeting } from '@mdi/js';

export default {
  data() {
    return {
      icon: mdiHumanGreeting
    }
  },
  computed: {
    calcAge() {
      const myBirtyday = 19931219;
      const today = new Date();
      const targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      return  (Math.floor((targetdate - myBirtyday) / 10000));
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-about__contents {
    margin-top: 20px;
    justify-content: center;

    &-text {
      word-wrap: break-word;
      font-size: 23px;
      color: rgb(95, 95, 95);
    }
  }
</style>
