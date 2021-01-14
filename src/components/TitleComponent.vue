<template>
  <div class="section__title">
    <div class="section__title-text">
      <v-icon 
        large
        class='section__title-icon'
      >{{ icon }}</v-icon>
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title']
}
</script>