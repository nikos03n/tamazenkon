
<template>
  <div>
    <div>
      <div>
        <v-btn
          hide-on-scroll
          absolute:true
          append:true
          block:true
          bottom:true
          color:undefined
          dark:null
          depressed:true
          disabled:true
          elevation:true
          exact:true
          exactActiveClass:true
          fab:true
          fixed:true
          height:true
          href:true
          icon:false
          input-Value:true
          large:true
          left:false
          light:true
          link:false
          loading:false
          maxHeight:undefined
          maxWidth:undefined
          minHeight:undefined
          minWidth:undefined
          outlined:false
          plain:false
          replace:false
          retainFocusOnClick:false
          right:false
          ripple:null
          rounded:false
          shaped:false
          small:false
          target:undefined
          text:false
          tile:false
          to:undefined
          top:false
          value:undefined
          width:undefined
          xLarge:false
          xSmall
          style="cursor: pointer"
          v-on:click="show = !show"
          >Детальніше</v-btn
        >
        <transition name="slide-fade">
          <p v-if="show">
            <v-layout perehid>
              <v-flex xs12 sm12 offset-sm0>
                <v-card style="box-shadow: inherit">
                  <v-card-title
                    primary-title
                    style="text-align: centre; margin-top: 10px"
                  >
                    <div>
                      <h2
                        class="headline mb-1 ont-weight-black"
                        style="font-weight: 700"
                      >
                        Резюме
                      </h2>
                      <h4
                        style="
                          font-size: 12px;
                          line-height: 1rem;
                          word-break: break-all;
                        "
                      >
                        {{ card_text }}
                      </h4>
                    </div>
                  </v-card-title>
                  <v-card-actions style="float: right"> </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    card_text:
      "Працюю оператором з виробництва пластикових карт (внутрішній паспорт, закордонний паспорт, водійські посвідчення, Visa або Mastercard і ін.). Робота бригадна, кількості п'ять чоловік в зміні на лінії.",
  }),
};
</script>
<style scoped>
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