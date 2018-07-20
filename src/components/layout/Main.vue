<template>
  <main>
    <div class="vue-view">
      <router-view></router-view>
    </div>
  </main>
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

main {
    margin: 0;
    padding: 0;
    overflow: hidden;

    background-color: rgb(255, 255, 255);
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    // padding-left: 15px;
    // padding-right: 15px;

    h1 {
      float: right;
    }

    .vue-view {
      height: calc(100% - (100px));
      padding: 20px;
      overflow-y: scroll;
    }
}
</style>
