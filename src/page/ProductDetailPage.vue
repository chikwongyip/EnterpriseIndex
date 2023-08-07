<script>
import MallHeader from "@/components/common/MallHeader.vue";
import MallFooter from "@/components/common/MallFooter.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import {companyInfo, getBrand, getCategory, getProduct} from "@/api";

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
        logoUrl:"",
        product:[],
        brand:[],
        // 传入body 参数
        images:[],
        category:[]
      }
    },
    methods:{
      getData(){
        companyInfo().then( res => {
          this.company = res.data[0]
          this.logoUrl= process.env.VUE_APP_IMAGE + this.company.logo
        })
        getProduct().then( res => {
          this.product = res.data.product
          this.images = res.data.images.filter( item => {
            item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
            return item
          })
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
    },
    computed:{
      productImages(){
        return (
            this.images.filter(item => {
              return (item.product_id == this.$route.query.product_id)
            })
        )
      },
      productDetails(){
        return (
            this.product.filter(item =>{
              return (item.product_id == this.$route.query.product_id)
            })
        )
      }
    }
  }
</script>

<template>
  <el-container>
    <el-header>
      <mall-header
          :logoUrl="logoUrl"
          :brand="brand"
          :category="category"
          :product="product"
      >

      </mall-header>
    </el-header>
    <el-main style="margin-top: 100px">
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