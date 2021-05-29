export default {
  state: {
    ads: [
      {
        text: "wgrgrhreherhetheheheh",
        title: "First ad",
        description: "Hello i am description",
        promo: false,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "123",
      },
      {
        text: "wg11111111111111",
        title: "Second ad",
        description: "Hello i am description",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "1234",
      },
      {
        title: "Third ad",
        description: "Hello i am description",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "12345",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    textAds (state) {
      return state.ads.filter(te => {
        return te.text
      })
    }
  }
}