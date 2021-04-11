<template>
  <div class="Menu">
  <CoreAppBar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CoreAppBar from '@/components/core/AppBar.vue'

export default {
  name: 'Menu',
  components: {
    CoreAppBar
  }
}
</script>
