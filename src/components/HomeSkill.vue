<template>
  <div>
    <div class="section__title">
      <div class="section__title-text">
        <v-icon 
          large
          class='section__title-icon'
        >{{ icon }}</v-icon>
        Skills
        </div>
    </div>
    <v-container>
      <v-row>
        <v-col
          cols='12'
          md='6' sm='10'
          class='mx-auto'
        >
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  class='ml-5 text-h5 font-weight-black'
                >Skill</v-list-item-title>
                <v-list-item-title
                  class='text-right mr-5 text-h5 font-weight-black'
                >Learning level</v-list-item-title>
              </v-list-item>
              <v-divider class="mx-4"></v-divider>
            </v-list>
            <v-list
              v-for="(skill, index) in skills"
              :key="index"
            >
              <v-list-item>
                <v-icon 
                x-large
                v-text="skill.icon"></v-icon>
                <v-list-item-title
                  v-text="skill.name"
                  class='font-weight-medium ml-3'
                ></v-list-item-title>
                <v-list-item-subtitle
                  class='text-right'
                >
                  <v-rating
                    v-model="skill.rating"
                    background-color="gray lighten-2"
                    color="blue"
                    size="20"
                    readonly
                    half-increments
                  ></v-rating>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>


<script>
import { mdiArmFlex } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageRuby } from '@mdi/js';
import { mdiLanguageRubyOnRails } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiAws } from '@mdi/js';
import { mdiDocker } from '@mdi/js';
import { mdiGit } from '@mdi/js';

export default {
  data() {
    return {
      icon: mdiArmFlex,
      skills: [ 
        {
          name: 'HTML',
          icon: mdiLanguageHtml5,
          rating: 3
        },
        {
          name: 'CSS',
          icon: mdiLanguageCss3,
          rating: 3
        },
        {
          name: 'JavaScript',
          icon: mdiLanguageJavascript,
          rating: 2
        },
        {
          name: 'Ruby',
          icon: mdiLanguageRuby,
          rating: 2.5
        },
        {
          name: 'Ruby on Rails',
          icon: mdiLanguageRubyOnRails,
          rating: 2.5
        },
        {
          name: 'Vue.js',
          icon: mdiVuejs,
          rating: 1.5
        },
        {
          name: 'AWS',
          icon: mdiAws,
          rating: 1
        },
        {
          name: 'Docker',
          icon: mdiDocker,
          rating: 1
        },
        {
          name: 'Git',
          icon: mdiGit,
          rating: 1.5
        }
      ]
    }
  }
}
</script>