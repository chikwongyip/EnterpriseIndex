<script>
  import MallHeader from "@/components/common/MallHeader.vue";
  import MallFooter from "@/components/common/MallFooter.vue";
  import ProductDetail from "@/components/ProductDetail.vue";
  export default {
    name:"ProductDetailPage",
    components:{
      MallHeader,
      MallFooter,
      ProductDetail
    }
  }
</script>

<template>
  <el-container>
    <el-header>
      <MallHeader> </MallHeader>
    </el-header>
    <el-main style="margin-top: 80px">
      <product-detail></product-detail>
    </el-main>
    <el-footer>
      <mall-footer></mall-footer>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>