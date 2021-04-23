<template>
  <div>
    <CoreAppBar />
    <conatct />
    <timeline />
    <vFutor />
  </div>
</template>

<script>
import conatct from "@/components/conatctUs/Conatct.vue";
import timeline from "@/components/conatctUs/Timeline.vue";
import CoreAppBar from "@/components/core/AppBar copy.vue";
import vFutor from "@/components/conatctUs/v-futor.vue";

export default {
  name: "rezume",
  components: {
    conatct,
    timeline,
    CoreAppBar,
    vFutor,
  },
};
</script>
