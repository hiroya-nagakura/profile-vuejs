<template>
  <nav id='header'>
    <ul>
      <li v-for="(item, index) in items" :key='index'>{{ item }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [ 'このサイトについて', 'ポートフォリオ', 'スキル', '略歴', '問合せ' ]
    };
  }
};
</script>