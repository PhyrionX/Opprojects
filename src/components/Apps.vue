<template>
  <section>
    <h1>2</h1>
    <ul>
      <li v-for="(app, index) in getApps" v-bind:key="index">
        {{ app.label }}
      </li>
    </ul>
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
    alert('mounted');
  }
}
</script>

<style scoped lang="scss">

</style>
