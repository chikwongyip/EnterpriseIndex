<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#FBF8F9"
        img-width="450"
        img-height="450"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="(item, index) in images"
          :key="index"
          :caption="item.product_name"
          :img-src="item.product_pic"
      ></b-carousel-slide>
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