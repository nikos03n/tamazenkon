<template>
  <div>
    <div class="text-center mb-4">
      <v-btn color="primary" @click="alert = !alert"> Детальніше </v-btn>
    </div>
    <v-alert
      :value="alert"
      color="#1976d2"
      dark
      border=""
      
      transition="scale-transition"
      elevation="20"
    >
      В адміністрації основні обовьязки була виконувати постановлення Кабінету
      Міністрів України, а саме я вів розподіл дизельного палива у регіоні та
      інше. В Державної податкової інспекції безпосередні виконував обов'язки
      (перевірка касової дисципліни РРО) насамперед це були продуктові магазини.
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