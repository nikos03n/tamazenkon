<template>
  <div>
    <div class="text-center mb-4">
      <v-btn color="primary" @click="alert = !alert"> Докладніше </v-btn>
    </div>
    <v-alert
      :value="alert"
      color="#1976d2"
      dark
      border=""
      transition="scale-transition"
      elevation="20"
      >У процеси торгівлі я створював сайти на движку Joomla для збільшення
      продажів. Це були сайти, будівельної тематики для утеплення будинків та
      продажу будівельних матеріалів (суміші будівельні, пінопласт) та ін. Також
      були сайти продажу металевоі сітки зварноі в картах і в рулонах,
      пластикових ємностей і фільтрів під воду (зворотний осмос та ін. Після,
      почав захоплюватися писати сайти з нуля і на vue.js
    </v-alert>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      alert: false,
    };
  },
};
</script>