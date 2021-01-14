<template>
  <section class="home-about">
    <TitleComponent
      :icon='icon'
      :title='title'
    />
    <v-container
    class='fade-in'
    >
      <v-row>
        <v-col
          v-for="(portfolio, index) in portfolios"
          :key = index
        >
          <v-card
            class="mx-auto my-12"
            max-width="380"
          >
            <v-img
              contain
              height="260"
              :src="portfolio.img"
            ></v-img>
            <v-card-title>{{ portfolio.title }}</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
              </v-row>
              <div class="my-4 subtitle-1">
                使用技術： {{ portfolio.technology }}
              </div>
              <div>{{ portfolio.body }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              link :
              <v-btn 
                color="primary"
                v-if=portfolio.siteUrl
                :href='portfolio.siteUrl'
                icon
                x-large
              >
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <v-btn 
                color="primary"
                v-if=portfolio.githubUrl
                :href='portfolio.githubUrl'
                icon
                x-large
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import TitleComponent from './TitleComponent.vue'
import { mdiBriefcase } from '@mdi/js';

export default {
  data() {
    return {
      icon: mdiBriefcase,
      title: 'Work',
      portfolios: [
        {
          title: 'FitMenu',
          img: require('../assets/img/FitMenu_logo.png'),
          technology: 'Ruby, Rails, AWS',
          body: '自分のお気に入りの筋トレメニューをシェアできるサイトです。体重や自身の行った筋トレメニューを記録する機能もあります。インフラにはAWSを利用しCircleCIによるCI/CDパイプラインを構築しています。',
          siteUrl: 'https://fitmenu.work/',
          githubUrl: 'https://github.com/hiroya-nagakura/muscle-app'
        },
        {
          title: 'Profile',
          img: require('../assets/img/profile.jpg'),
          technology: 'Vue, Vuetify',
          body: '現在閲覧されている本サイトです。バックエンドの言語だけでなく、フロントエンドの技術も学ぼうとVue学習の第一歩に作成しました。',
          siteUrl: 'https://hiroya-nagakura.firebaseapp.com/',
          githubUrl: 'https://github.com/hiroya-nagakura/profile-vuejs'
        }
      ]
    }
  },
  components: {
    TitleComponent
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