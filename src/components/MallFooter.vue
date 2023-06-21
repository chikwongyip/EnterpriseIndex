<template>
   <div>
      <h1>探索我们的品牌</h1>
      <div class="line"></div>
      <MallBrand> </MallBrand>
   </div>
</template>

<script>
import MallBrand from './MallBrand.vue';
export default {
  name: "MallFooter",
  components:{
    MallBrand
  },
  data(){
    return{
      message:"",
      baseUrl:"http://localhost:8000/images/",
      brand:[]
    }
  },
}
</script>

<style scoped>
  .brand{
    display: flex;
    justify-content: space-around;
    align-items: bottom;  
  }
</style>