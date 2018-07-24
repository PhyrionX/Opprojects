<template>
  <nav v-if="isAuth">
    <div class="brand">
      <router-link to="/">OPProjects</router-link>
    </div>
    <div class="menu">
      <router-link class="menu-element" to="/">
        <span>
          Home
        </span>
      </router-link>
      <router-link class="menu-element" to="/path2">
        <span>
          Projects
        </span>
      </router-link>
    </div>
    <div class="menu right">
      <div v-on:click="logOut()" class="menu-element">
        <span>Log out</span>
      </div>
    </div>
  </nav>
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
    logOut() {
      this.$store.dispatch('logOut');
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  margin: 0;
  padding: 0;
  // overflow: hidden;
  background-color: #25313e;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 200;
  color: #adbece;

  .brand {
    width: 220px;
    float: left;
    height: 100%;

    a {
      font-size: 20px;
      line-height: 50px;
      color: #adbece;
      text-decoration: none;
      padding: 0 10px;
      font-weight: 700;
    }
  }

  .menu {
    list-style-type: none;
    // overflow: hidden;
    float: left;
    height: 100%;
    vertical-align: middle;

    &.right {
      float: right;
    }

    .menu-element {
      height: calc(100% - (18px));
      float: left;
      padding: 0 20px;
      width: 80px;
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

      &:hover {
        background-color: #1b252e;
        color: white;
      }
    }
  }
}



li {
    float: right;
}

li a {
    display: block;
    color: green;
    text-align: center;
    padding: 0 15px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
</style>
