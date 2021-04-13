<template>
  <div>
    <vCarouselJava></vCarouselJava>

    <v-carousel
      hide-delimiters
      hide-delimiter-background
      carousel-dot-active-opacity:
      none
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <div class="title">
          <v-btn1 color="#1976d2" dark large @click="onClickHandler(i)">{{
            item.title
          }}</v-btn1>
        </div>

        <div class="title12">
          <v-card-text
            style="
              font-family: Myriad Pro Regular;
              margin-top: 195px;
              font-size: 113px;
            "
            color="error"
            dark
            large
            >Minto</v-card-text
          >
        </div>
        <div class="title22">
          <v-card-text
            style="
              font-family: Myriad Pro Regular;
              margin-top: 20px;
              font-size: 31px;
            "
            color="error"
            dark
            large
            >A minimal Web Design from cssauthor.com</v-card-text
          >
        </div>
      </v-carousel-item>
    </v-carousel>
    <div>
      <div class="clas">
        <hr />
        <span>Lorem ipsum dolor sit amet,</span> consectetur adipisicing elit,
        sed do eiusmod tempor <br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud <br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import vCarouselJava from "@/components/v-carousel-java.vue";
export default {
  name: "SectionText",
  components: {
    vCarouselJava,
  },
  data() {
    return {
      items: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/mayport-268e8.appspot.com/o/ads%2FLayer%2024.png?alt=media&token=2b2712dd-e811-4230-8e7d-94ae64f68fe4",
          title: "Rack Section",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Rack2 Section",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Rack 3Section",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      item: "items",
    };
  },
};
</script>

<style scoped>
.v-btn {
  color: red;
  background-color: none;
  margin-top: 50px;
  margin-left: 50px;
}
.v-btn--round {
  margin-top: 20px;
}
.v-btn__content i {
  background-color: rgb(26, 161, 48);
}
.v-btn--round {
  border-radius: 10%;
}

.v-btn--icon.v-size--default {
  height: 150px;
  width: 76px;
}
.v-application--is-ltr .v-window__prev {
  left: 0;
  background-color: #18110521;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #2727273b;
}

/* .v-btn__content i,
.v-btn i,
.v-btn:before {
  color: red;
  background-color: aqua;
  margin-top: 20px;
} */

.clas {
  font-family: Segoe UI Italic;
  font-size: 23px;
  margin-top: 43px;
  margin-bottom: 43px;
}

span {
  color: #82699d;
}

hr {
  border: none; /* Убираем границу */
  background-color: #82699d8f; /* Цвет линии */
  color: #82699d79; /* Цвет линии для IE6-7 */
  height: 1px; /* Толщина линии */
  margin-top: 5px;
}
</style>
