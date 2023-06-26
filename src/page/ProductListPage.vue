<template>
    <el-container class="header">
      <el-header >
         <MallHeader></MallHeader>
      </el-header>
      <el-main>
        <ProductList></ProductList>
      </el-main>
      <el-footer>
        <MallFooter></MallFooter>
      </el-footer>
    </el-container>
  </template>
  <script>
  import MallHeader from "@/components/MallHeader";
  import MallFooter from "@/components/MallFooter";
  import ProductList from "@/components/ProductList.vue";
  export default {
    name: "ProductListPage",
    components:{
      MallHeader,
      ProductList,
      MallFooter
    }
  }
  </script>
  
  <style scoped>
    .header{
      margin-top: 10px;
    }
  </style>