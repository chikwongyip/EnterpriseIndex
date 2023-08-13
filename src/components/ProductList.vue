<template>
  <div>
    <b-container class="bv-example-row">
      <product-card
          :product-list="productList"
      >

      </product-card>
    </b-container>
  </div>
</template>

<script>
import ProductCard from "@/components/common/ProductCard.vue";
export default {
  name: "ProductList",
  components: {ProductCard},
  props:{
    productList:[],
  },
}
</script>

<style scoped>

</style>