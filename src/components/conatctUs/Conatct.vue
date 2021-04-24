<template>
  <div>
    <v-banner class="justify-center headline font-weight-light" sticky>
      Scroll Me - Method invoked
      <span class="font-weight-bold" v-text="scrollInvoked"></span>
      times
    </v-banner>


    <v-toolbar light>
      <v-toolbar-title
        >Здесь будут портфолио моих новых проектов</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="item in items"
        :key="item.text"
        class="hidden-sm-and-down"
      >
        <v-btn link to="/ConatctUs" flat>???????</v-btn>
        <v-btn link to="/" flat>??????</v-btn>
        <v-btn link to="/About" flat>?????</v-btn>
      </v-toolbar-items>
    </v-toolbar>



    
    <v-card id="create">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab"> mdi-close </v-icon>
            <v-icon v-else> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </div>
</template>



<script>
import timeline from "@/components/conatctUs/Timeline.vue";

export default {
  name: "rezume",
  components: {},
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    return: {
      items: [
        {
          text: "Досвід роботи",
        },
      ],
    },
  }),
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },
};
</script>

<style scoped>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
