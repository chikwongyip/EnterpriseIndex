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
        this.logoUrl= process.env.VUE_APP_IMAGE + this.company.logo
      })
      getProduct().then( res => {
        this.product = []
        if (this.$route.query.name){
          this.product = this.search(this.$route.query.name,this.$route.query.type,res.data.product)
        }else if(this.$route.query.brand_id){
          this.product = res.data.product.filter( item => {
            return item.brand_id == this.$route.query.brand_id
          })
        }else if(this.$route.query.category_id){
          this.product = res.data.product.filter( item => {
            return item.category_id == this.$route.query.category_id
          })
        }else{
          this.product = res.data.product
        }
        this.product.forEach(item => {
          item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
          // item.product_desc = item.product_desc.replaceAll(" ","&nbsp;").replaceAll("\r\n", "<br/>");
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
  watch:{
    '$route.query.brand_id':{
      handler(){
        this.getData()
      }
    },
    '$route.query.category_id':{
      handler(){
        this.getData()
      }
    },
    immediate:true,
  }
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