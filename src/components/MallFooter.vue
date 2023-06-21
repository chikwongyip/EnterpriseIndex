<template>
   <div>
    <h1>探索我们的品牌</h1>
     <div class="line"></div>
     <el-col></el-col>
     <el-row :gutter="20">
       <el-col :span="5" v-for="item in brand" :key="item.brand_id">
         <div class="brand">
           <el-image :src="baseUrl+item.brand_image" style="width:200px;height:200px">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
           </el-image>
           <h3>
            {{ item.brand_name }}
           </h3>
         </div>
      </el-col>
     </el-row>
   </div>
</template>

<script>
import { getBrand } from '@/api';
// import MallBrand from './MallBrand.vue';
export default {
  name: "MallFooter",
  // components:{
  //   MallBrand
  // },
  data(){
    return{
      message:"",
      baseUrl:"http://localhost:8000/images/",
      brand:[]
    }
  },
  methods:{
    getData(){
      getBrand().then(res => {
        this.brand = res.data
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style scoped>
  .brand{
    display: flex;
    justify-content: space-around;
    align-items: bottom;  
  }
</style>