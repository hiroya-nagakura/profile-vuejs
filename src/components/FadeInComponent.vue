<template>
  <div :class="{fadeIn: visible}">
    <slot v-show='visible' ></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(!this.visible){
        let top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .fadeIn {
  animation: fadeIn 5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>