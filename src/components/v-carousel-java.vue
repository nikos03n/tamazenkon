
<template>
  <div>
    <div id="demo">
      <i
        style="
          cursor: pointer;
          background: lightblue no-repeat fixed center;
          font-style: initial;
        "
        v-on:click="show = !show"
        >Переключить</i
      >
      <transition name="slide-fade">
        <p v-if="show">
          Анимации появления и исчезновения могут иметь Hазличные
          продолжительности и динамику.Анимации появления и исчезновения могут
          иметь
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
/* ...demo
{background: lightblue url("") no-repeat fixed center;
} */
v-window__prev .v-btn__content,
v-window__next .v-btn__content {
  background-color: red;
}
v-icon notranslate mdi mdi-chevron-left theme--dark {
  font-size: 36px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>