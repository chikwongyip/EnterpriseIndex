<template>
  <div class="container">
    <div class="grid text-center">
      <div class="g-col-4" v-for="item in product" :key="item.product_id">
        <img src="item.product_pic" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data(){
    return{
      product:[],
      baseUrl:"http://localhost:8000/images/"
    }
  }
}
</script>

<style scoped>

</style>