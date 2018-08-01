<template>
  <aside v-if="isAuth" class="sidebar">
    <section>
      <div class="menu">
        <router-link class="menu-item" to="/"><i></i><span>Home</span></router-link>
        <router-link class="menu-item" to="/apps"><span>Projects</span></router-link>
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
    border-bottom: 1px solid rgba(255,255,255,0.05);
    overflow: hidden;

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
      font-size: 14px;
      padding: 11px 15px;
      color: #adbece;
      border-top: 1px solid transparent;
      border-color: rgba(255,255,255,0.05);

      i {
        width: 20px;
        background-color: red;
        height: 100%;
      }
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
