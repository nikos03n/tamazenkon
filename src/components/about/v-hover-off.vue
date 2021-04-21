<template>
  <div max-width="1020">
    <div style="background: #1976d2">
      <v-div class="home2"
        >Тамазенко Микола Васильович <br />
        (066)-725-62-51 nik.tam03@icloud.com</v-div
      >
      <!-- <div class="home1"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "v-hove-off",

  props: {
    msg: String,
  },
  data: () => ({
    return: {},
    years: [
      {
        id: "100px",
        color: "cyan",
        year: "з 2015",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style scoped>
.home1 {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6")
    no-repeat left top;
  background-size: 200px;
  padding-bottom: 150px;
}
.home2 {
  color: #ffffff;
  text-align: center;
  border: 1px solid blue;
  border: 200px;
  border-top: 300px;
  background-size: 300px;
  padding-bottom: 250px;
  height: 200px;
}
</style>