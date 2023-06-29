<template>
  <div class="container">
    <el-container class="container">
      <el-header >
        <mall-header
            :logoUrl="logoUrl"
            :application-list="applicationList"
            :product="product"
            :service="service"
        >
        </mall-header>
      </el-header>
      <el-main style="margin-top: 200px">
        <div>
          <ServiceBody></ServiceBody>
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
  </div>
</template>
<script>
import MallHeader from "@/components/common/MallHeader";
import MallFooter from "@/components/common/MallFooter";
import ServiceBody from "@/components/ServiceBody";
import {applicationList, companyInfo, getBrand, getProduct, getService} from "@/api";
export default {
  name: "ServicePage",
  components:{
    MallHeader,
    MallFooter,
    ServiceBody
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

<style scoped>

</style>