<template>
  <el-container class="container">
    <el-header>
      <mall-header
          :logoUrl="logoUrl"
          :product="product"
          :brand="brand"
          :category="category"
      >
      </mall-header>
    </el-header>
    <el-main style="margin-top: 80px">
      <div>
       <index-body>

       </index-body>
      </div>
    </el-main>
    <el-footer>
      <mall-footer
          :company="company"
          :brand="brand"
      >
      </mall-footer>
    </el-footer>
  </el-container>
</template>
<script>
import { companyInfo,getProduct,getBrand,getCategory } from "@/api";
import MallHeader from "@/components/common/MallHeader";
import MallFooter from "@/components/common/MallFooter";
import IndexBody from "@/components/IndexBody";
export default {
  name: "IndexPage",
  data(){
    return{
      company:{ },
      logoUrl:"",
      product:[],
      brand:[],
      category:[]
    }
  },
  components:{
    MallHeader,
    MallFooter,
    IndexBody
  },
  methods:{
    getData(){
      companyInfo().then( res => {
        this.company = res.data[0]
        this.logoUrl= process.env.VUE_APP_IMAGE + this.company.logo
      })
      getProduct().then( res => {
        this.product = res.data.product
      })
      getBrand().then( res => {
        this.brand = res.data.map( item => {
          item.brand_image = process.env.VUE_APP_IMAGE + item.brand_image
          return item
        })
      })
      getCategory().then( res => {
        this.category = res.data
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
  .container{
    margin-top: 10px;
  }
</style>