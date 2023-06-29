<script>
import MallFooter from "@/components/common/MallFooter.vue";
import ProductList from "@/components/ProductList.vue";
import MallHeader from "@/components/common/MallHeader.vue";
import {companyInfo, getBrand, getService, getProduct, applicationList} from "@/api";
export default {
  name: "ProductListPage",
  components: {
    ProductList,
    MallHeader,
    MallFooter
  },
  data(){
    return{
      company:{ },
      baseUrl:"http://localhost:8000/images/",
      logoUrl:"",
      product:[],
      service:[],
      applicationList:[],
      brand:[]
    }
  },
  methods:{
    getData(){
      companyInfo().then( res => {
        this.company = res.data[0]
        this.logoUrl= this.baseUrl + this.company.logo
      })
      getProduct().then( res => {
        this.product = res.data.product
      })
      getService().then( res => {
        this.service = res.data
      })
      applicationList().then( res => {
        this.applicationList = res.data
      })
      getBrand().then( res => {
        this.brand = res.data.map( item => {
          item.brand_image = this.baseUrl + item.brand_image
          return item
        })
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<template>
  <el-container class="container">
    <el-header>
      <mall-header
          :logoUrl="logoUrl"
          :application-list="applicationList"
          :product="product"
          :service="service"
      >

      </mall-header>
    </el-header>
    <el-main style="margin-top: 80px">
      <div>
        <product-list></product-list>
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

<style scoped>

</style>