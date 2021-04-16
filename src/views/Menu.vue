<template>
  <div class="Menu">
    <CoreAppBar />
  </div>
</template>

<script>
// @ is an alias to /src
import CoreAppBar from "@/components/core/AppBar.vue";

export default {
  name: "Menu",
  components: {
    CoreAppBar,
  },
};
</script>
