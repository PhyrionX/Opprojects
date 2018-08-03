<template>
  <section class="apps-page panel">
    <div class="apps-list">
      <div class="app-card" v-for="(app, index) in getApps" v-bind:key="index">
        {{ app.label }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    getApps() {
      return this.$store.state.apps;
    }
  },
  mounted() {
    this.$store.dispatch('setApps', {});
    // alert('mounted');
  }
}
</script>

<style scoped lang="scss">
.apps-page {
  &.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
  }

  .apps-list {
    background-color: #fefefe;
    color: #717171;
    overflow: hidden;
    box-sizing: border-box;

    .app-card {
      width: 25%;
      border-color: #e4e4e4;
      border-right: 1px solid #cfcfcf;
      padding-top: 15px;
      padding-bottom: 15px;
      float: left;
    }
  }
}
</style>
