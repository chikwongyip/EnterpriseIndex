<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="800"
        img-height="500"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="(item, index) in images"
          :key="index"
          caption="text"
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
  },
  mounted() {
    console.log(this.images)
  }
}
</script>