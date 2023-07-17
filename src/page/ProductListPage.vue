<script>
//TODO:页面跳转和刷新功能
import MallFooter from "@/components/common/MallFooter.vue";
import ProductList from "@/components/ProductList.vue";
import MallHeader from "@/components/common/MallHeader.vue";
import {companyInfo, getBrand, getCategory, getProduct} from "@/api";
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
      baseUrl:"http://120.77.25.98:8000/images/",
      logoUrl:"",
      product:[],
      brand:[],
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
        this.product = []
        if (this.$route.query.name){
          this.product = this.search(this.$route.query.name,this.$route.query.type,res.data.product)
        }else if(this.$route.query.brand_id){
          this.product = res.data.product.filter( item => {
            return item.brand_id = this.$route.query.brand_id
          })
        }else if(this.$route.query.category_id){
          this.product = res.data.product.filter( item => {
            return item.category_id = this.$route.query.category_id
          })
        }else{
          this.product = res.data.product
        }
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
    },
    search(name,type,data){
      let result = [];
      const regExp = new RegExp(name,"g")
      if(type === "1"){
        result = data.filter( item => {
          return regExp.test(item.brand_name)
        })
      }
      if(type === "2"){
        result = data.filter( item => {
          return regExp.test(item.category_name)
        })
      }
      if(type === "3"){
        result = data.filter( item => {
          return regExp.test(item.product_name)
        })
      }
      return result
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<template>
  <el-container class="container">
    <el-header>
      <mall-header
          :logoUrl="logoUrl"
          :brand="brand"
          :product="product"
          :category="category"
      >

      </mall-header>
    </el-header>
    <el-main style="margin-top: 80px">
      <div>
        <product-list
            :product-list="product"
        >
        </product-list>
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