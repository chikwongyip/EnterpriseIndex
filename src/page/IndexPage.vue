<template>
  <el-container class="header">
    <el-header >
       <MallHeader></MallHeader>
    </el-header>
    <el-main>
      <IndexMain></IndexMain>
    </el-main>
    <el-footer>
      <MallFooter></MallFooter>
    </el-footer>
  </el-container>
</template>
<script>
import MallHeader from "@/components/MallHeader";
import MallFooter from "@/components/MallFooter";
import IndexMain from "@/components/IndexMain.vue";
export default {
  name: "IndexPage",
  components:{
    MallHeader,
    IndexMain,
    MallFooter
  }
}
</script>

<style scoped>
  .header{
    margin-top: 10px;
  }
</style>