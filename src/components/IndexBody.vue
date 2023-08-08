<template>
  <div class="container">
    <carousel-component
        :images="imagesList"
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
        this.images = res.data
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed:{
    imagesList(){
      return(
        this.images.map( item => {
          item.product_pic = process.env.VUE_APP_IMAGES + item.product_pic
          return item
        })
      )
    }
  }
}
</script>

<style scoped>

</style>