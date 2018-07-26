<template>
  <section class="layout">
    <app-header/>
    <section class="section">
      <app-sidebar />
      <app-main />
    </section>
  </section>
</template>

<script>
import HeaderVue from './Header.vue';
import SidebarVue from './Sidebar.vue';
import MainVue from './Main.vue';

export default {
  components: {
    'app-header': HeaderVue,
    'app-sidebar': SidebarVue,
    'app-main': MainVue
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

.layout {
  height: 100%;
  display: table;
  width: 100%;
  table-layout: fixed;

  section {
    height: 100%;
    display: table;
    width: 100%;
    table-layout: fixed;
  }
}
</style>
