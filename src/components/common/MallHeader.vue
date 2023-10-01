<template>
  <div class="container">
    <div class="header">
      <div class="image">
        <router-link :to="{ name: 'index' }">
          <el-image
            :src="logoUrl"
            style="width:180px; height:80px"
            :load="imageOnLoad"
            >
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
          </el-image>
        </router-link>
      </div>
      <div class="searchBar">
        <el-input placeholder="输入名称搜索产品" v-model="name" class="input-with-select">
          <el-select v-model="type" slot="prepend" placeholder="请选择" style="width:100px">
            <el-option
            v-for="item in selection"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="submitSearch"></el-button>
        </el-input>
      </div>
      <div class="link-dark">
        <el-button type="primary" @click="clickToLogin" style="background-color:#1B438C ">后台登录</el-button>
      </div>
    </div>
    <div class="menu">
      <el-menu
        class="el-menu-demo" 
        mode="horizontal"
        background-color="#1B438C"
        text-color="#FDFFFD"
        active-text-color="#FFFEB1"
        router
        :default-active="this.$route.path"
        >
        <el-submenu index="1">
          <template slot="title">品牌</template>
          <el-menu-item v-for="(item) in brand"
                        :key="item.brand_id"
                        index="/productList"
                        :route="{path:'/productList',query:{brand_id: item.brand_id }}"
          >
            {{item.brand_name}}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2" v-bind="product">
          <template slot="title">产品</template>
          <el-menu-item v-for="(item,index) in product"
                        :key="index"
                        index="/productDetail"
                        :route="{path:'/productDetail',query:{product_id: item.product_id }}"
          >
            {{item.product_name}}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">产品类型</template>
          <el-menu-item v-for="item in category"
                        :key="item.category_id"
                        index="/productList"
                        :route="{path:'/productList',query:{category_id: item.category_id}}"
          >
            {{ item.category_name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="{ path:'/about'}">
          关于我们
        </el-menu-item>
        <el-menu-item :index="{path:'/document'}">
          技术文档
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "MallHeader",
  props:{
    // eslint-disable-next-line vue/require-prop-type-constructor
    logoUrl:String,
    product:[],
    brand:[],
    category:[]
  },
  data(){
    return{
      name:"",
      type:"",
      brand_id:"",
      loginUrl:"",

      selection:[
        {
          label:"品牌",
          value:"1"
        },
        {
          label:"类型",
          value:"2"
        },
        {
          label:"产品",
          value:"3"
        },
      ],
    }
  },
  methods:{
    submitSearch(){
      this.$router.push({path:"/productSearch",query:{
        name:this.name,
        type:this.type
        }}).catch(()=>{})
    },
    imageOnLoad(e){
      console.log(e)
    },
    clickToLogin(){
      window.open(process.env.VUE_APP_ADMIN)
    }
  },
  computed(){
    this.loginUrl = process.env.VUE_APP_ADMIN
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-around;
    align-items: center;  
  }
  .image{
    flex-basis: 10%;
  }
  .searchBar{
    flex-basis: 70%;
  }
  .button{
    flex-basis: 5%;
  }
  .el-select .el-input{
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .menu{
    border-radius:25px
  }
  .router-link{
    color:white;
  }
</style>