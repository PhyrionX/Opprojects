<template>
  <main>
    <div class="vue-view">
      <app-breadcrumbs />
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from './Breadcrumbs';

export default {
  components: {
    'app-breadcrumbs': Breadcrumbs
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
  display: table-cell;
  margin: 0;
  padding: 0;
  overflow: hidden;

  background-color: rgb(255, 255, 255);
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  // padding-left: 220px;
  // padding-right: 15px;

  .vue-view {
    height: 100%;
    overflow-y: scroll;
    background-color: #f7f7f7;
  }
}
</style>
