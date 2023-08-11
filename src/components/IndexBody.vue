<template>
  <div class="container">
    <carousel-component
        :images="images"
    >
    </carousel-component>
  </div>
</template>

<script>
import { getActiveImage } from "@/api";
import CarouselComponent from "@/components/common/CarouselComponent.vue";
export default {
  components: {CarouselComponent},
  data(){
    return{
      images:[]
    }
  },
  methods:{
    getData(){
      getActiveImage().then(res => {
        this.images = res.data.map(item => {
          item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
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

</style>