<template>
   <div>
      <h1>探索我们的品牌</h1>
      <div class="line"></div>
      <MallBrand> </MallBrand>
      <div style="height:100px"></div>
      <div class="footer-container">
        <div class="contract">
          <h2>广州瑞谱佳科技有限公司拥有稳妥，快捷，优质的售后服务，欢迎垂询</h2>
          <i class="el-icon-position"></i>
          <span>地址</span>
          <i class="el-icon-position"></i>
          <span>地址</span>
          <i class="el-icon-position"></i>
          <span>地址</span>
        </div>
        <div>

        </div>
      </div>
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
  .footer-container{
    background-color: #F8F8FC;
    display: flex;
    justify-content: left;
  }
  .contract{
    display: flex;
    align-items: top;
    margin-top: 20px;
    margin-left: 20px;
  }
</style>