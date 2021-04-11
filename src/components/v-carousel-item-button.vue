
<template>
  <div class="caro">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div class="title">
        <v-btn color="error" dark large @click="onClickHandler(i)">{{
          item.title
        }}</v-btn>
      </div>
    </v-carousel-item>
    <p>
      Configure the rack in few easy steps. Click on the part you want. to start
      from
    </p>
  </div>
</template>

<script>
export default {
  name: "v-carousel-item-button",
  props: ["showRackSec", "showSubrackSec", "showParts", "showDatabase"],
  data() {
    return {
      currentSlideIndex: 0,
      items: [
        {
          id: "rack",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "Rack Section",
        },
        {
          id: "subrack",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Subrack Section",
        },
        {
          id: "parts",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Parts Section",
        },
        {
          id: "admin",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Admin Section",
        },
      ],
    };
  },
  methods: {
    onClickHandler(index) {
      const attrs = [
        "showRackSec",
        "showSubrackSec",
        "showParts",
        "showDatabase",
      ];
      const attr = attrs[index];
      this.$emit("changeValue", attr);
    },
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
