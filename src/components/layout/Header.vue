<template>
  <nav v-if="login">
    <div class="menu">
      <div class="menu-element">
        <router-link to="/">Home</router-link>
      </div>
      <div class="menu-element">
        <router-link to="/path2">Projects</router-link>
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
    login() {
      return this.$store.state.login.isAuth;
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  border: 6px solid green;
  position: fixed;
  top: 0;
  height: 50px;
  width: calc(100% - (12px));
  z-index: 200;

  .menu {
    list-style-type: none; 
    overflow: hidden;   
    float: left;
    height: 100%;
    vertical-align: middle;

    .menu-element {
      height: 100%;
      float: left;
      padding: 0 20px;
      width: 60px;

      a {
        display: block;
        color: green;
        text-align: center;
        padding: 0 15px;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        margin-top: 18px;
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
