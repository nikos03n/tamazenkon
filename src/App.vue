<template>
  <v-app>
    <Menuq msg="Hello Vue 3 in CodeSandbox!" />
    <router-view />
  </v-app>
</template>

<script>
import Menuq from './views/Menu.vue'

export default {
  name: 'app',
  components: {
    Menuq
  }
}
</script>

<style lang="scss">
#app {
  font-family: Segoe UI Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: auto;
  margin-left: auto;
  max-width: 1020px;
}
</style>
