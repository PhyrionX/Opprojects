<template>
  <ul>
    <li><router-link to="/">home</router-link></li>
    <li><router-link to="/path2">2</router-link></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    border: 6px solid green;
    position: fixed;
    top: 0;
    width: calc(100% - (12px));
    z-index: 200;
}

li {
    float: right;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
</style>
