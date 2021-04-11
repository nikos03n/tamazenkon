<template>
  <div>
    <conatct />
    <timeline />
  </div>
</template>

<script>
import conatct from "@/components/conatctUs/Conatct.vue";
import timeline from "@/components/conatctUs/Timeline.vue";

export default {
  name: "rezume",
  components: {
    conatct,
    timeline,
  },
};
</script>
