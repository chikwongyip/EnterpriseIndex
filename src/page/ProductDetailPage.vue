<template>
    <el-container class="header">
      <el-header >
         <MallHeader></MallHeader>
      </el-header>
      <el-main>
        <ProductDetail></ProductDetail>
      </el-main>
      <el-footer>
        <MallFooter></MallFooter>
      </el-footer>
    </el-container>
  </template>
  <script>
  import MallHeader from "@/components/MallHeader";
  import MallFooter from "@/components/MallFooter";
  import ProductDetail from "@/components/ProductDetail.vue";
  export default {
    name: "ProductDetailPage",
    components:{
      MallHeader,
      ProductDetail,
      MallFooter
    }
  }
  </script>
  
  <style scoped>
    .header{
      margin-top: 10px;
    }
  </style>