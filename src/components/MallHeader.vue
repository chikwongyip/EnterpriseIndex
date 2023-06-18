<template>
  <div>
    <div class="header">
      <el-image :src="src">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
      </el-image>
      <el-input placeholder="输入名称搜索产品" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="产品名称" value="1"></el-option>
          <el-option label="产品类型" value="2"></el-option>
          <el-option label="产品品牌" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div>
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect" 
        background-color="#759EFF"
        text-color="#fff"
        active-text-color="#FFFEB1"
        >
        <el-submenu index="1">
          <template slot="title">应用</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">产品</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
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
import companyInfo from "../api/index"
export default {
  name: "MallHeader",
  data(){
    return{
      baseUrl:"http://localhost:8000",
      src:"",
      data:[]
    }
  },
  methods:{
    getData(){
      companyInfo.then(res => {
        this.data = res.data;
        this.src = this.baseUrl+this.data[0].logo
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
    justify-content: left;
  }
  .submenu{
    color: white;
  }
</style>