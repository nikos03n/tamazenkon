<template>
<div>
  <p>link to="https://my-sait-v.web.app"https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Fapp.png?alt=media&token=df094f3d-9299-46f5-abd2-873509e42bc3"  https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Fice_screenshot_20210415-192406.png?alt=media&token=559b230d-dedb-4ba8-9193-16710d0b4f7c"</p>
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
