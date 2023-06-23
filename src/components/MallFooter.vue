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
                <ion-icon name="heart"></ion-icon>
              </div>
              <div class="feature-content">
                <h3>(999) 1234 56789</h3>
                <p>Free support line!</p>
            </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import MallBrand from './MallBrand.vue';
export default {
  name: "MallFooter",
  components:{
    MallBrand
  },
  data(){
    return{
      message:"",
      baseUrl:"http://localhost:8000/images/",
      brand:[]
    }
  },
}
</script>

<style scoped>
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
</style>