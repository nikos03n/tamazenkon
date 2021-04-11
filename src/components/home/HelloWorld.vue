<template>
<div>
  <v-layout perehid>
    <div class="cover" style="background-image: url(path/to/user/image.jpg);">

</div>
    <v-flex >
        <v-img style="
            height: 300px;
            width: 300px;"
          src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FColor%20Balance%203.png?alt=media&token=a2fcae75-0fbb-428d-aa2e-2bdc96da7141"
          aspect-ratio="1.2"
        ></v-img>
    </v-flex>

    <v-flex xs8 sm8 offset-sm0>
      <v-card style="box-shadow: inherit">
        <v-card-title primary-title style="text-align: left">
          <div>
            <h3
            class="headline mb-1 ont-weight-black"
            style="font-weight: 700;">
            Lorem ipsum dolor sit amet
            </h3>
            <div style="font-size: 15px"> {{ card_text }} </div>
          </div>
        </v-card-title>
        <v-card-actions style="float: right;">
          <v-btn
          style="
          font-size: 13px;
          font-family: Segoe UI Italic;
          background-color: #ffffff !important;
          box-shadow: inherit;
          text-indent: -7.910714em;
          text-transform: revert;
          letter-spacing: 0;"
          flat color="orange"
          >Read more
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  <v-card style="box-shadow: inherit; margin-bottom: 60px;">
    <v-text-no-wrap class11="text-sm-left" style="font-size: 23px;"><spane style="color:#000000">Where</spane> We Have Been Featured---------      -------------------------------------------------------------
    </v-text-no-wrap>
  </v-card>

 <!-- <v-layout>
    <v-flex xs6 sm6 >
      <v-card-text style="padding-top: 6px;">
        <p style="font-size: 23px;"><spane style="color:#000000">Where</spane> We Have Been Featured</p>
      </v-card-text>
    </v-flex>

    <v-flex xs6 sm11 offset-sm0>
      <v-card-text>
        <p style="border-bottom-style: dotted;"></p>
      </v-card-text>
    </v-flex>
 </v-layout> -->

  <v-container1 >
    <v-layout class="qwer">
      <v-flex xs2 sm3>
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FLayer%2026.png?alt=media&token=104ebf29-6234-4198-8312-6dd4cd778257"
        ></v-img>
      </v-flex>

      <v-flex xs3 sm3>
        <v-img src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FLayer%2027.png?alt=media&token=657c8d54-7804-469a-95a5-962bf95a39c4">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-flex>
      <v-flex xs3 sm3>
        <v-img src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FLayer%2030.png?alt=media&token=4e109fba-3b3c-4054-a275-a5d88c3221af">
          <div class2="fill-height bottom-gradient"></div>
        </v-img>
      </v-flex>

      <v-flex xs3 sm3>
        <v-img src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FLayer%2029.png?alt=media&token=a953ecfc-5bc2-4355-87c3-3bb38ebde4de">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-flex>

    </v-layout>
  </v-container1>
</div>
</template>
<script>
export default {
  data () {
    return {
      card_text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '
    }
  }
}
</script>
<style scoped>

.qwer {
  background-color: #f5f5f5;
}

/*Responsive*/

/* 992px - 1200px */
@media screen and (max-width: 1300px)
{
}

/* 768px - 992px */
@media screen and (max-width: 992px)
{
  .perehid{
    background-size: 100%;
    flex-direction: column;
    width:100%;
    padding-right: 0px;
    max-width: 400%;
    }
    .flex.sm4.otdel {
    flex-basis: 40%;
    max-width: 100%;}
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
}
/* 320px - 576px */
@media screen and (max-width: 576px) {
}

@media (min-width: 0){
.flex.xs8 {
    flex-grow: 0;
    max-width: 100.666667%;
}
}
</style>
