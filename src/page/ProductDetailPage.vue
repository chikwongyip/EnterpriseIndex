<script>
  import MallHeader from "@/components/common/MallHeader.vue";
  import MallFooter from "@/components/common/MallFooter.vue";
  import ProductDetail from "@/components/ProductDetail.vue";
  import { companyInfo, getBrand, getProduct,getCategory} from "@/api";
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
        baseUrl:"http://120.77.25.98:8000/images/",
        logoUrl:"",
        product:[],
        brand:[],
        // 传入body 参数
        productDetails:{},
        productImages:[],
        category:[]
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
        getBrand().then( res => {
          this.brand = res.data.map( item => {
            item.brand_image = this.baseUrl + item.brand_image
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