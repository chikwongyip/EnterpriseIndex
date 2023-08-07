<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <carousel-component
            :images="images"
        >

        </carousel-component>
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
  </div>
</template>

<script>
import carouselComponent from "@/components/common/CarouselComponent.vue";
export default {
  name: "ProductDetail",
  components: {carouselComponent},
  props:{
    product:{},
    images:[],
  },
  mounted() {
    console.log(this.images)
  }
}
</script>

<style scoped>

</style>