<template>
  <aside v-if="isAuth" class="sidebar">
    <section>
      <div class="menu">
        <router-link class="menu-item" to="/"><span>Home</span></router-link>
        <router-link class="menu-item" to="/"><span>Home</span></router-link>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    isAuth() {
      return this.$store.state.login.isAuth;
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

aside {
  display: table-cell;
  height: 100%;
  overflow: hidden;
  background-color: #41586e;
  width: 220px;
  vertical-align: top;
  padding-top: 50px;

  section {
    height: 100%;
  }

  .menu {

    .menu-item {
      height: calc(100% - (18px));
      float: left;
      padding: 0 20px;
      width: calc(100% - (30px));
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 0 15px;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      padding-top: 18px;
      color: #adbece;
    }
  }

  .nav {
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      line-height: 1.5;
      position: relative;

      .menu-item {
        text-decoration: none;

        span {
          width: 100%;
        }
      }
    }
  }
}
</style>
