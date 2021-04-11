<template>
  <div class="home">
    <Swipe msg="Welcome to Your Vue.js App" />
    <SectionText msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home/HelloWorld.vue";
import Swipe from "@/components/home/Swiper.vue";
import SectionText from "@/components/home/SectionText.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Swipe,
    SectionText,
  },
};
</script>
