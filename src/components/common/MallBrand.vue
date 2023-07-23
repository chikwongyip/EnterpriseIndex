<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item" v-for="item in brand" :key="item.brand_id" style="text-align:center">
        <el-image
            :src="item.brand_image"
            :fit="fit"
            style="width:200px; height:80px"
            :load="imageOnLoad"
        >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
        <p>{{item.brand_name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MallBrand",
  props:{
    brand:[]
  },
  methods:{
    imageOnLoad(e) {
      console.log(e)
    }
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
