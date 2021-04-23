<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <v-hover v-slot="{ hover }" disabled>
          <v-card :elevation="hover ? 12 : 12" id="header"
            ><v-card-text class="my-4 text-center title white--text">
              Тамазенко Микола Васильович
            </v-card-text>
          </v-card></v-hover
        >
      </div>
    </div>
    <v-btn to="/About">
      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        bottom
        color="success"
        outlined
      >
        <div class="container-fluid">
          <div class="row">
            <v-hover v-slot="{ hover }" disabled>
              <v-card :elevation="hover ? 12 : 12" id="header"
                ><v-card-text class="my-4 text-center title white--text">
                  Тамазенко Микола Васильович
                </v-card-text>
              </v-card></v-hover
            >
          </div>
        </div>
      </v-snackbar></v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    return: {},
    styles: [
      {
        id: 1,
        number: "70px",
        style: "height",
      },
    ],
  }),
};
</script>
<style lang="sass" scoped>
#header
  width: 100%
  height: 10%
  //background: url(https://cdn.pixabay.com/photo/2019/03/11/09/53/car-4048220_960_720.jpg)
  center center no-repeat
  background-size: cover
  background: #0c1818f8
  //bottom: 20px
  left: 4px
</style>
