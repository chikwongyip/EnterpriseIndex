<template>
  <el-container class="container">
    <el-header >
       <MallHeader></MallHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <MallFooter></MallFooter>
    </el-footer>
  </el-container>
</template>
<script>
import MallHeader from "@/components/MallHeader";
import MallFooter from "@/components/MallFooter";
export default {
  name: "IndexPage",
  components:{
    MallHeader,
    MallFooter
  }
}
</script>

<style scoped>
  .container{
    margin-top: 10px;
  }
</style>