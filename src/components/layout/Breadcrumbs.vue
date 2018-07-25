<template>
  <ul class="breadcrumbs">
    <li>
      <i class="fa fa-home"></i>
      Home
    </li>
    <li>
      Projects
    </li>
  </ul>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  background-color: #fff;
  border: 1px solid #e8e8e8;
  padding: 8px 15px;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #999;
  list-style: none;

  li {
    display: inline-block;
  }

  li+li:before {
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
  }
}
</style>
