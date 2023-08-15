<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        fade
        indicators
        background="#FBF8F9"
        style="text-shadow: 0px 0px 2px #000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="(item, index) in images"
          :key="index"
          :caption="item.product_name"
          :img-src="item.product_pic"
          img-width="450"
          img-height="450"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props:{
    images:[]
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>