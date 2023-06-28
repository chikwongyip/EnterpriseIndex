<script>
import MallFooter from "@/components/common/MallFooter.vue";
import ProductList from "@/components/ProductList.vue";
import MallHeader from "@/components/common/MallHeader.vue";

export default {
  name: "ProductListPage",
  components: {ProductList, MallHeader, MallFooter}
}
</script>

<template>
  <el-container class="container">
    <el-header>
      <MallHeader></MallHeader>
    </el-header>
    <el-main style="margin-top: 80px">
      <div>
        <product-list></product-list>
      </div>
    </el-main>
    <el-footer>
      <MallFooter></MallFooter>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>