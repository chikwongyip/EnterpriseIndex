<template>
   <div class="container">
      <h1>探索我们的品牌</h1>
      <div class="line"></div>
      <mall-brand :brand="brand">

      </mall-brand>
      <div style="height:50px"></div>
      <div class="feature-area mt-80">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-feature">
                <div class="feature-icon">
                  <phone-icon class="icon"></phone-icon>
                </div>
                <div class="feature-content">
                  <h3>{{ company.tel }}</h3>
                  <p>欢迎致电，垂询！</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-feature">
                <div class="feature-icon">
                  <email-icon class="icon"></email-icon>
                </div>
                <div class="feature-content">
                  <h3>{{ company.email }}</h3>
                  <p>欢迎邮件报价！</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-feature">
                <div class="feature-icon">
                 <location-icon class="icon"></location-icon>
                </div>
                <div class="feature-content">
                  <h4>{{ company.address }}</h4>
                  <p>欢迎参观我们的团队</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom-area matisse-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="footer-copyright">
                <p>Copyright &copy;
                  <router-link :to="{ name: 'index' }">
                    {{ company.name}}
                  </router-link>
                  All Rights Reserved</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-copyright">
                <p>{{ company.icp }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import PhoneIcon from 'vue-ionicons/dist/md-call.vue'
import EmailIcon from 'vue-ionicons/dist/md-mail.vue'
import LocationIcon from 'vue-ionicons/dist/md-locate.vue'
import MallBrand from './MallBrand.vue';
export default {
  name: "MallFooter",
  components:{
    MallBrand,
    PhoneIcon,
    LocationIcon,
    EmailIcon
  },
  props:{
    company:{},
    brand:{}
  },
  data(){
    return{
      message:""
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style scoped>
.feature-area{
  padding: 40px 0;
	background-color: #919fb3;
}
.container{
  width:100%
}
.single-feature {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-right: 1px solid #a1adbe;
}
.feature-icon > i {
	font-size: 48px;
	color: #fff;
}
.feature-content {
	display: inline-block;
	padding-left: 15px;
	text-align: left;
}
.icon{
  font-size: 60px;
  color:white
}
.feature-footer{
  padding: 40px 0;
  background-color:white
}
.footer-bottom-area {
	background: #1B438C;
	padding: 25px 0;
}
.footer-copyright > p {
	font-size: 14px;
	color: #fff;
    margin-bottom: 0;
}
.footer-copyright > p > a{
    color: #fff;
}
.footer-copyright > p > a:hover{
    color: #ff6a00;
}
</style>