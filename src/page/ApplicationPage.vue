<template>
    <el-container class="header">
      <el-header >
         <MallHeader></MallHeader>
      </el-header>
      <el-main>
        <ApplicationMain></ApplicationMain>
      </el-main>
      <el-footer>
        <MallFooter></MallFooter>
      </el-footer>
    </el-container>
  </template>
  <script>
  import MallHeader from "@/components/MallHeader";
  import MallFooter from "@/components/MallFooter";
  import ApplicationMain from "@/components/ApplicationMain.vue";
  export default {
    name: "ApplicationPage",
    components:{
      MallHeader,
      ApplicationMain,
      MallFooter
    }
  }
  </script>
  
  <style scoped>
    .header{
      margin-top: 10px;
    }
  </style>