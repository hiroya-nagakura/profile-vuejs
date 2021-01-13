<template>
  <section class="home-hero">
    <v-container
      fluid
      fill-height
      class="home-hero__content"
    >
      <v-row>
        <v-col class='home-hero__content-text'>
          <h1>Hiroya Nagakura's portfolio.</h1>
          <p>I wanna be an engineer</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
  .home-hero__content {
    background: url("../assets/img/Top.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;
    @include display_pc {
      height: 80vh;
    }
    &-text {
      color: white;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      font-family: 'Impact';
      @include display_pc {
        h1{
          font-size: 100px;
        }
        p{
          font-size: 50px
        }
      }
    }
  }
</style>