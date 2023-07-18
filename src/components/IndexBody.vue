<template>
  <div class="container">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="image[0].product_pic" alt="">
        </div>
        <div class="carousel-item" v-for="(item,index) in images" :key="index">
          <img v-if="index > 0" src="item.product_pic" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import { getActiveImage } from "@/api";
export default {
  data(){
    return{
      images:[]
    }
  },
  methods:{
    getData(){
      getActiveImage().then(res => {
        this.images = res.data.map( item => {
          item.product_pic = process.env.VUE_APP_URL + '/images/' + item.product_pic
          return item
        })
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style>
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}
.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}
.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  z-index: 1;
  display: inline-block;
}
.carousel-control-prev {
  left: 0;
}
.carousel-control-next {
  right: 0;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50% / 100% 100%;
  text-indent: -9999px;
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3
