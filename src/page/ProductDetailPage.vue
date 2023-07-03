<script>
  import MallHeader from "@/components/common/MallHeader.vue";
  import MallFooter from "@/components/common/MallFooter.vue";
  import ProductDetail from "@/components/ProductDetail.vue";
  import {applicationList, companyInfo, getBrand, getService,getProduct} from "@/api";
  export default {
    name:"ProductDetailPage",
    components:{
      MallHeader,
      MallFooter,
      ProductDetail
    },
    data(){
      return{
        company:{ },
        baseUrl:"http://localhost:8000/images/",
        logoUrl:"",
        product:[],
        service:[],
        applicationList:[],
        brand:[],
        // 传入body 参数
        productDetails:{},
        productImages:[]
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
          this.productImages = res.data.images.filter( item => {
            if(item.product_id == this.$route.query.product_id){
              item.product_pic = this.baseUrl + item.product_pic
              return  item
            }
          })
          this.productDetails = this.product.filter( item => {
            if (item.product_id == this.$route.query.product_id){
              return item
            }
          })
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
  <el-container>
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
      <product-detail
          :product="productDetails"
          :images="productImages"
      >

      </product-detail>
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