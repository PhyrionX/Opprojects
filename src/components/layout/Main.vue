<template>
  <main>
    <div class="vue-view">
      <router-view v-if="login"></router-view>
      <app-login v-else></app-login>
    </div>
  </main>
</template>

<script>
import Login from '../Login'

export default {
  components: {
    'app-login': Login
  },
  data () {
    return {

    }
  },
  computed: {
    login() {
      return this.$store.state.login.isAuth;
    }
  }
}
</script>

<style scoped lang="scss">

main {
    margin: 0;
    padding: 0;
    overflow: hidden;

    background-color: rgb(255, 255, 255);
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 220px;
    // padding-right: 15px;

    .vue-view {
      height: calc(100% - (50px));
      padding: 0 20px;
      overflow-y: scroll;
    }
}
</style>
