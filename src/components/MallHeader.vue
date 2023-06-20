<template>
  <div>
    <div class="header">
      <div class="image">
        <el-image 
          :src="src"
          :fit="fit"
          style="width:200px; height:80px"
          >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
        </el-image>
      </div>
      <div class="searchBar">
        <el-input placeholder="输入名称搜索产品" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="产品名称" value="1"></el-option>
            <el-option label="产品类型" value="2"></el-option>
            <el-option label="产品品牌" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="menu">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect" 
        background-color="#1B438C"
        text-color="#FDFFFD"
        active-text-color="#FFFEB1"
        style="border-radius:15px"
        >
        <el-submenu index="1" v-bind="applicationList">
          <template slot="title">应用</template>
          <el-menu-item v-for="(item,id) in applicationList" :key="id">
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2" v-bind="product">
          <template slot="title">产品</template>
          <el-menu-item v-for="(item,index) in product" :key="index">
            {{ item.product_name }}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">服务</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { companyInfo,
         applicationList,
         getProduct } from "@/api";
export default {
  name: "MallHeader",
  data(){
    return{
      baseUrl:"http://localhost:8000/images/",
      src:"",
      data:[],
      applicationList:[],
      product:[],
      select:'',
      search:""
    }
  },
  methods:{
    getData(){
      companyInfo().then(res => {
        this.data = res.data
        this.src = this.baseUrl + this.data[0].logo;
      })
      applicationList().then(res => {
        this.applicationList = res.data
      })
      getProduct().then(res => {
        this.product = res.data.product
      })
    }
  },
  mounted(){
    this.getData()
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
  .el-select .el-input{
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .menu{
    border-radius:25px
  }
</style>