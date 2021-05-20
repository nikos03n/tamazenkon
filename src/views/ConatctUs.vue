<template>
  <div>
    <CoreAppBar />
    <conatct />
  </div>
</template>

<script>
import conatct from "@/components/conatctUs/v-conatct.vue";
import timeline from "@/components/conatctUs/Timeline.vue";
import CoreAppBar from "@/components/core/AppBar copy.vue";
import vFutor from "@/components/conatctUs/v-futor.vue";

export default {
  name: "CobetctUs",
  components: {
    conatct,
    CoreAppBar,
  },
};
</script>
