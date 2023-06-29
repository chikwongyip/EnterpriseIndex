<template>
  <div class="container text-center">
    <div class="row g-2">
      <div class="col-6" v-for="item in productList" :key="item.product_id">
        <img src="" alt="">
        <div class="p-3">{{ item.product_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//TODO:搜索栏功能实现
export default {
  name: "ProductList",
  props:{
    productList:[],
  },
}
</script>

<style scoped>

</style>