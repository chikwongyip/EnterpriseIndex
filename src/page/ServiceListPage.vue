<template>
    <el-container class="header">
      <el-header >
         <MallHeader></MallHeader>
      </el-header>
      <el-main>
        <ServiceMain></ServiceMain>
      </el-main>
      <el-footer>
        <MallFooter></MallFooter>
      </el-footer>
    </el-container>
  </template>
  <script>
  import MallHeader from "@/components/MallHeader";
  import MallFooter from "@/components/MallFooter";
  import ServiceMain from "@/components/ServiceMain.vue";
  export default {
    name: "ServiceListPage",
    components:{
      MallHeader,
      ServiceMain,
      MallFooter
    }
  }
  </script>
  
  <style scoped>
    .header{
      margin-top: 10px;
    }
  </style>