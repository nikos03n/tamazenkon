<template>
<div>
  <v-toolbar light>
    <v-toolbar-title>Тамазенко Микола Васильович</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="item in items" :key="item.text" class="hidden-sm-and-down">
      <v-btn link to="/ConatctUs" flat>Досвід роботи</v-btn>
      <v-btn link to="/" flat>Обо мне</v-btn>
      <v-btn link to="/About" flat>Додаткова інформація</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <timeline/>
  <timeline/>
</div>
</template>



<script>
import timeline from '@/components/conatctUs/Timeline.vue'


export default {
  name: 'rezume',
  components: {
    
    timeline
  },
  data () {
    return {
      items: [
        {
          text: 'Досвід роботи'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
