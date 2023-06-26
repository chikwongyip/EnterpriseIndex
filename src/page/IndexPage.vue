<template>
  <el-container class="container">
    <el-header>
       <MallHeader></MallHeader>
    </el-header>
    <el-main style="margin-top: 200px">
      <div>
        <IndexBody></IndexBody>
      </div>
    </el-main>
    <el-footer>
      <MallFooter></MallFooter>
    </el-footer>
  </el-container>
</template>
<script>
import MallHeader from "@/components/common/MallHeader";
import MallFooter from "@/components/common/MallFooter";
import IndexBody from "@/components/IndexBody";
export default {
  name: "IndexPage",
  components:{
    MallHeader,
    MallFooter,
    IndexBody
  }
}
</script>

<style scoped>
  .container{
    margin-top: 10px;
  }
</style>