<template>
  <div class="container text-center">
    <div class="row g-2">
      <div class="col-6">
        <img src="" alt="">
        <div class="p-3">Custom column padding</div>
      </div>
      <div class="col-6">
        <div class="p-3">Custom column padding</div>
      </div>
      <div class="col-6">
        <div class="p-3">Custom column padding</div>
      </div>
      <div class="col-6">
        <div class="p-3">Custom column padding</div>
      </div>
    </div>
  </div>
</template>

<script>
//TO-DO:How to pass product list data to this component
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