<template>
  <div class="container">
    <app-layout v-if="login"/>
    <app-login v-else></app-login>
  </div>
</template>

<script>
import LoginVue from './components/Login.vue';
import LayoutVue from './components/layout/Layout.vue';

export default {
  name: 'app',
  components: {
    'app-layout': LayoutVue,
    'app-login': LoginVue
  },
  data () {
    return {

    }
  },
  computed: {
    login() {
      return this.$store.state.login.isAuth;
    }
  }
}
</script>

<style lang="scss">
html {
  overflow: hidden;
  height: 100%;
}
body {
  margin:0;
  overflow: hidden;
  height: 100%;
  font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  .container {
    background-color: gray;
    overflow: hidden;
    height: 100%;


  }
}
</style>
