<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="item in images" :key="item.pic_id">
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
        <h2>
          <li class="el-icon-collection"></li>
          名称:{{ product[0].product_name }}
        </h2>
        <h4>
          <li class="el-icon-collection"></li>
          品牌:{{ product[0].brand_name}}
        </h4>
        <h4>
          <li class="el-icon-collection"></li>
          类型:{{ product[0].category_name}}
        </h4>
        <h4 v-if="product[0].product_standard == ''">
          规格:暂无
        </h4>
        <h4 v-else>
          {{product[0].product_standard}}
        </h4>
        <p>{{ product[0].product_desc }}</p>
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
            <p class="card-text">{{ product[0].product_name }}</p>
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
    product:{},
    images:[],
  },
}
</script>

<style scoped>

</style>