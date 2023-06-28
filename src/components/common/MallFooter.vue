<template>
   <div class="container">
      <h1>探索我们的品牌</h1>
      <div class="line"></div>
      <MallBrand> </MallBrand>
      <div style="height:50px"></div>
      <div class="feature-area mt-80">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-feature">
                <div class="feature-icon">
                  <PhoneIcon class="icon"></PhoneIcon>
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
                  <MaillIcon class="icon"></MaillIcon>
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
                  <LocationIcon class="icon"></LocationIcon>
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
                <p>Copyright &copy; <a href="www.bootstrapmb.com">{{ company.name}}</a> All Rights Reserved</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-copyright">
                <p><a href="www.bootstrapmb.com">{{ company.icp }}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import PhoneIcon from 'vue-ionicons/dist/md-call.vue'
import MaillIcon from 'vue-ionicons/dist/md-mail.vue'
import LocationIcon from 'vue-ionicons/dist/md-locate.vue'
import MallBrand from './MallBrand.vue';
import { companyInfo } from '@/api';
export default {
  name: "MallFooter",
  components:{
    MallBrand,
    PhoneIcon,
    LocationIcon,
    MaillIcon
  },
  data(){
    return{
      message:"",
      baseUrl:"http://localhost:8000/images/",
      brand:[],
      company:{}
    }
  },
  methods:{
    getData(){
      companyInfo().then(res => {
        this.company = res.data[0];
        console.log(this.company)
      })
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