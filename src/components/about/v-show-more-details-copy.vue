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
    >
     Працюю оператором з виробництва пластикових карток (внутрішній паспорт, закордонний паспорт, водійські посвідчення, Visa або Mastercard та ін.). Робота бригадна, кількості п'ять чоловік в зміні на лінії.
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