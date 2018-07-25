<template>
  <div class="container">
    <app-header />
    <section class="section">
      <app-sidebar />
      <app-main />
    </section>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainVue from './components/layout/Main';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    'app-main': MainVue
  },
  data () {
    return {

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

    .section {
      height: 100%;
      display: table;
      width: 100%;
      table-layout: fixed;
    }
  }
}
</style>
