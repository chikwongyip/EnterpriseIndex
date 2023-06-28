<template>
  <div class="container">
    <el-container class="container">
      <el-header >
        <MallHeader></MallHeader>
      </el-header>
      <el-main style="margin-top: 200px">
        <div>
          <ServiceBody></ServiceBody>
        </div>
      </el-main>
      <el-footer>
        <MallFooter></MallFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MallHeader from "@/components/common/MallHeader";
import MallFooter from "@/components/common/MallFooter";
import ServiceBody from "@/components/ServiceBody";
export default {
  name: "ServicePage",
  components:{
    MallHeader,
    MallFooter,
    ServiceBody
  }
}
</script>

<style scoped>

</style>