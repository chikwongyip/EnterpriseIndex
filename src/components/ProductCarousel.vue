<script>
  export default {
    props:{
      images:[]
    },
    data() {
      return {
        slides: [
          {
            id: 1,
            image: 'https://via.placeholder.com/800x400?text=Slide+1'
          },
          {
            id: 2,
            image: 'https://via.placeholder.com/800x400?text=Slide+2'
          },
          {
            id: 3,
            image: 'https://via.placeholder.com/800x400?text=Slide+3'
          }
        ]
      }
    }
  }
</script>

<template>
  <div id ="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(item, index) in images" :key="index" :class="['carousel-item', index === 0 ? ' active' : '']" data-bs-interval="10000">
        <img :src="item.product_pic" class="d-block w-100" :alt="item.product_id">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>

</style>