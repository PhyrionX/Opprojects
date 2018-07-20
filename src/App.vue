<template>
  <div class="container">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import MainVue from './components/layout/Main';

export default {
  name: 'app',
  components: {
    'app-header': Header,
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
  .container {
    background: gray;
    overflow: hidden;
    height: 100%;
  }
}
</style>
