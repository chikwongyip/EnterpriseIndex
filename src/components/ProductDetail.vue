<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="item in productImages" :key="item.pic_id">
              <img src="item.product_pic" alt="Slide 2">
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
      <div class="col-md-6">
        <h2>{{ productDetails.product_name }}</h2>
        <h3>{{ productDetails.brand_name}}</h3>
        <h3>{{ productDetails.category_name}}</h3>
        <p>{{ productDetails.product_desc }}</p>
        <p>{{ productDetails.product_standard }}</p>
      </div>
    </div>
    <div class="row">
      <div style="height: 20px">

      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProductDetail",
  props:{
    productDetails:{},
    productImages:[],
  }
}
</script>

<style scoped>

</style>