<template>
  <div>
    <div class="wrapper">
      <vHedr> </vHedr>
      <vHome />
      <SectionText />
      <div class="sliding-background"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vHedr from "@/components/home/v-heder.vue";
import vHome from "@/components/home/v-home.vue";
import SectionText from "@/components/home/SectionText.vue";

export default {
  name: "Home",
  components: {
    vHedr,
    vHome,
    SectionText,
  },
  data: () => ({}),
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}

.sliding-background {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Fice_screenshot_20210415-192406.png?alt=media&token=559b230d-dedb-4ba8-9193-16710d0b4f7c")
    repeat-x;
  height: 200px;
  width: 5076px;
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, 0, 0);
  }
}

.clas {
  font-family: Segoe UI Italic;
  font-size: 23px;
  margin-top: 43px;
  margin-bottom: 43px;
}
</style>
