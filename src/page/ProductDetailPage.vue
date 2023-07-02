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
        productImagesList:[],
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
          this.productImagesList = res.data.productImages
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
      // 获取查询的产品ID
      this.product_id = this.$route.query.product_id
      // 获取所有数据
      this.getData()
      console.log(this.product)
      console.log(this.product_id)
    // 根据产品ID 获取对应产品描述 图片
      this.productDetails = this.product.filter( item => {
        return item.product_id == this.product_id
      })
      console.log(this.productDetails)
      this.productImages = this.productImagesList.filter( item => {
        if(item.product_id == this.product_id){
          item.product_pic = this.baseUrl + item.product_pic
          return item
        }
      })
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
          :product-details="productDetails"
          :product-images="productImages"
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