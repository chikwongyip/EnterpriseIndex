<template>
   <div>
      <h1>探索我们的品牌</h1>
      <div class="line"></div>
      <MallBrand> </MallBrand>
      <div style="height:100px"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="single-feature">
              <div class="feature-icon">
                <PhoneIcon class="icon"></PhoneIcon>
              </div>
              <div class="feature-content">
                <h3>(999) 1234 56789</h3>
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
                <h3>(999) 1234 56789</h3>
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
                <h3>(999) 1234 56789</h3>
                <p>欢迎参观我们的团队</p>
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
    }
  },
}
</script>

<style scoped>
.container{
  background-color: #1B438C;
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
  font-size: 80px;
}
</style>