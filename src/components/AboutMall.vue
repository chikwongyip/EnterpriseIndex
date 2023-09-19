<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src="../../src/static/imgbin.png" alt="">
                </div>
                <div class="col-md-6">
                    <div style="height:1000px">
                        <p>
                            <pre id="desc">{{ company.description }}</pre> 
                        </p> 
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "AboutMall",
    props:{
        company:{}
    }
  }
  </script>
  
  <style scoped>
    #desc{
        white-space: pre-wrap;
        font-size: larger;
        text-align: center;
    }
  </style>