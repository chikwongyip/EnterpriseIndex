<template>
  <div class="grid-container">
    <div class="grid-item" v-for="item in gridItems" :key="item.brand_id">
      <img :src="item.brand_image" alt="" />
      <p>{{ item.brand_name }}</p>
    </div>
  </div>
</template>
<script>
import { getBrand } from '@/api';
export default {
  name: "MallBrand",
  data() {
    return {
      gridItems:[],
      baseUrl:"http://localhost:8000/images/"
    }
  },
  methods:{
    getData(){
      getBrand().then(res => {
        this.gridItems = res.data.map((item) => {
          item.brand_image = this.baseUrl+item.brand_image
          return item
        })
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
  
<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 16px;
  }
  
  .grid-item {
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    padding: 16px;
  }
  
  .grid-item img {
    max-width: 50%;
    height: auto;
  }
</style>
