<template>
  <div>

    <div>
      <div class="clas">
        <hr />
        <span>Когда вы устраиваетесь на работу,</span> вас обычно просят
        отправить резюме, рекомендации и, может быть, ссылку на профиль в
        LinkedIn. Но существуют лучшие способы выделиться на фоне своих
        конкурентов, и создание персонального сайта – один из них (этот сайт я
        сделал на vue.js и загрузил на firebesa). Цели у личных сайтов могут
        быть самые <br />разнообразные, но в первую очередь они помогают вам
        рассказать историю о себе. А учитывая, что 53% работодателей считают,
        что резюме недостаточно для того, чтобы определить, подходит ли человек
        на должность, элемент сторителлинга может увеличить ваши шансы на успех.
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionText",
  components: {},
  props: {
    
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>

.clas {
  font-family: Segoe UI Italic;
  font-size: 23px;
  margin-top: 43px;
  margin-bottom: 43px;
}

span {
  color: #91143d;
}

hr {
  border: none; /* Убираем границу */
  background-color: #82699d8f; /* Цвет линии */
  color: #82699d79; /* Цвет линии для IE6-7 */
  height: 1px; /* Толщина линии */
  margin-top: 5px;
}
</style>
