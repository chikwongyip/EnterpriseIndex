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
            <docs-list
                :document-list="document"
                >
            </docs-list>
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
  import { companyInfo,getProduct,getBrand,getCategory,getDocs } from "@/api";
  import MallHeader from "@/components/common/MallHeader";
  import MallFooter from "@/components/common/MallFooter";
  import DocsList from "@/components/DocsList.vue";
  export default {
    name: "DocsPage",
    data(){
      return{
        company:{ },
        logoUrl:"",
        product:[],
        brand:[],
        category:[],
        document:[]
      }
    },
    components:{
      MallHeader,
      MallFooter,
      DocsList,
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
        getDocs().then( res => {
            this.document = res.data.map( item => {
                item.docs = process.env.VUE_APP_IMAGE + item.docs
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
    .container{
      margin-top: 10px;
    }
  </style>