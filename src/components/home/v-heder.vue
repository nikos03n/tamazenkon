<template>
  <div>
    <div class="container-fluid" style="height: 70px">
      <div class="row">
        <header>
          <nav role="navigation" class="navbar navbar-inverse">
            <div
              v-for="(style, i) in styles"
              :key="i"
              :style="style.number"
              class="container"
            ></div>
          </nav>
        </header>
      </div>
    </div>
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
<style scoped>
header {
  width: 100%;

  height: 100%;
  background: url(https://cdn.pixabay.com/photo/2019/03/11/09/53/car-4048220_960_720.jpg)
    center center no-repeat;
  height: 140px;
  background-size: cover;
}

header a,
a:hover {
  color: #f0ad4e;
  text-decoration: none;
}

header h1 {
  letter-spacing: 15px;
  font-size: 300%;
}

header p {
  color: white !important;
  font-size: 90%;
  letter-spacing: 3px;
}

.navbar-inverse {
  padding: 5%;
  background: transparent;
  border-color: transparent;
}
</style>
