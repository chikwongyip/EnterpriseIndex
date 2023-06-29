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
//TODO:搜索栏功能实现
export default {
  name: "ProductList",
  props:{
    productList:[]
  },
  data(){
    return{
      product:[]
    }
  },
  methods:{
    submitSearch(name,type){
      let result = [];
      const regExp = new RegExp(name,"g")
      if(type === "1"){
        result = this.product.filter( item => {
          return regExp.test(item.brand_name)
        })
      }
      if(type === "2"){
        result = this.product.filter( item => {
          return regExp.test(item.category_name)
        })
      }
      if(type === "3"){
        result = this.product.filter( item => {
          return regExp.test(item.product_name)
        })
      }
      return result
    }
  },
  computed(){
    if (this.$route.params.name){
      this.product = this.submitSearch(this.$route.params.name,this.$route.params.type)
    }else{
      this.product = this.productList
    }
  }
}
</script>

<style scoped>

</style>