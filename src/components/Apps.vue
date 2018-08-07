<template>
  <section class="apps-page panel">
    <div class="apps-list">
        <div class="app-card" @click="redirectToApp(app)" v-for="(app, index) in getApps" v-bind:key="index">
          <i v-bind:class="app.img"></i><span>{{ app.label }}</span>
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
  methods: {
    redirectToApp(app) {
      switch(app.id) {
        case 1:
          this.$store.dispatch('setApp', app);
          this.$router.push('apps/opmoney');
          break;
      }
    }
  },
  computed: {
    getApps() {
      return this.$store.state.apps.apps;
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
      width: 33.333%;
      border-color: #e4e4e4;
      border-right: 1px solid #cfcfcf;
      padding: 15px 30px;
      height: 80px;
      float: left;
      box-sizing: border-box;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background-color: #cecece;
        color: white;
      }

      i {
        padding: 5px;
      }

      @media (max-width: 992px) {
        width: 50%;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
</style>
