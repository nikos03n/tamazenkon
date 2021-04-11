<template>
  <div>
    <vCarouselJava></vCarouselJava>
    <div class="wrapper2">
      <v-container fluid>
        <v-layout row>
          <v-flex xs12>
            <div
              class="v-carousel2"
              :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
            >
              <v-carousel-item
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
                :imageSlide="false1"
                :width="slideWidth"
              >
                <p>{{ item.img }}</p>
                <p>{{ item.name }}</p>
                <p>{{ item.id }}</p>
              </v-carousel-item>
            </div>
            <button @click="prevSlide">Prev</button>
            <button @click="nextSlide">Next</button>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import vCarouselJava from "./v-carousel-java.vue";
import vCarouselItem from "./v-carousel-item";

export default {
  name: "v-carousel",
  components: {
    vCarouselJava,
    vCarouselItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
    slideWidth: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
        console.log(this.currentSlideIndex);
      }
    },
  },
  mounted111() {
    if (this.interval > 0) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper2 {
  max-width: 500px;
  overflow: hidden;
  height: auto;
  margin: 0 auto;
}
.v-carousel2 {
  display: flex;
  transition: all ease 0.5s;
}
</style>