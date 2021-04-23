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
  </div>
</template>



<script>
import timeline from "@/components/conatctUs/Timeline.vue";

export default {
  name: "rezume",
  components: {
  },
  data() {
    return {
      items: [
        {
          text: "Досвід роботи",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
