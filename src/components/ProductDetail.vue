<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <product-carousel
            :images="carouselList"
        >
        </product-carousel>
      </div>
      <div class="col-md-6">
        <h2>
          <li class="el-icon-collection"></li>
          名称:{{ product[0].product_name }}
        </h2>
        <h4 v-if="product[0].product_standard === ''">
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
            <p class="card-text">{{ product[0].brand_name }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">{{ product[0].category_name}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">{{ product[0].product_standard}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCarousel from "@/components/ProductCarousel.vue";
export default {
  name: "ProductDetail",
  components: {ProductCarousel},
  props:{
    product:{},
    images:[],
  },
  mounted() {
    console.log(this.images)
  },
  computed:{
    carouselList(){
      return(
        this.images.map(item => {
          item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
          return item
        })
      )
    }
  }
}
</script>

<style scoped>

</style>