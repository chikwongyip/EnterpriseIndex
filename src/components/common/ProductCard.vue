<script>
  export default{
    props:{
      productList:[]
    }
  }
</script>

<template>
  <section class="featured-courses vertical-column courses-wrap">
    <div class="container">
      <div class="row mx-m-25">
        <div class="col-12 col-md-6 col-lg-4 px-25" v-for="(item,index) in productList" :key="index">
          <div class="course-content">
            <figure class="course-thumbnail">
              <router-link :to="{name:'productDetail',query:{product_id:item.product_id}}">
                <img :src="item.product_pic" alt="">
              </router-link>
            </figure><!-- .course-thumbnail -->

            <div class="course-content-wrap">
              <header class="entry-header">
                <h2 class="entry-title">{{ item.product_name }}</h2>

                <div class="entry-meta flex align-items-center">
                  <div class="course-author">
                    <router-link :to="{name:'productList',query:{brand_id:item.brand_id}}">
                      品牌:{{ item.brand_name }}
                    </router-link>
                  </div>

                  <div class="course-author">
                    <router-link :to="{name:'productList',query:{category:item.category_id}}">
                      类别：{{ item.category_name }}
                    </router-link>
                  </div>
                </div><!-- .course-date -->
              </header><!-- .entry-header -->

              <footer class="entry-footer flex justify-content-between align-items-center">
<!--                <div class="course-cost">-->
<!--                  $45 <span class="price-drop">$68</span>-->
<!--                </div>&lt;!&ndash; .course-cost &ndash;&gt;-->

                <div class="course-ratings flex justify-content-end align-items-center">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star-o"></span>

                  <span class="course-ratings-count">点击查看更多...</span>
                </div><!-- .course-ratings -->
              </footer><!-- .entry-footer -->
            </div><!-- .course-content-wrap -->
          </div><!-- .course-content -->
        </div><!-- .col -->
      </div><!-- .row -->
    </div><!-- .container -->
  </section><!-- .courses-wrap -->
</template>

<style scoped>
.courses-wrap .heading .entry-title {
  margin: 0;
  font-size: 42px;
  font-weight: 400;
}

.courses-wrap .heading .courses-menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.courses-wrap .heading .courses-menu li {
  padding-left: 40px;
}

.courses-wrap .heading .courses-menu li:nth-of-type(1) {
  padding-left: 0;
}

.courses-wrap .heading .courses-menu li a {
  border-bottom: 1px solid transparent;
  font-size: 18px;
  line-height: 1;
  color: #383749;
  text-decoration: none;
}

.courses-wrap .heading .courses-menu li a:hover,
.courses-wrap .heading .courses-menu li.active a {
  color: #19c880;
  border-color: #19c880;
}

.mx-m-25 {
  margin-right: -25px !important;
  margin-left: -25px !important;
}

.px-25 {
  padding-right: 25px !important;
  padding-left: 25px !important;
}

.course-content {
  margin-top: 50px;
  transition: all .35s
}

.course-content:hover {
  box-shadow: 0 24px 38px rgba(81,107,117,.21);
}

.course-thumbnail {
  width: 100%;
  margin: 0;
  object-fit: cover;
}

.course-thumbnail img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.course-content-wrap {
  padding: 26px 30px 20px;
  border: 1px solid #ebebeb;
  border-top: 0;
  background: #fff;
}

.course-content .entry-title {
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 400;
}

.course-content .entry-title a {
  color: #383749;
}

.course-content .entry-meta {
  margin-top: 12px;
}

.course-author {
  font-style: italic;
}

.course-author a {
  color: #19c880;
  text-decoration: none;
}

.course-date {
  position: relative;
  padding-left: 10px;
  margin-left: 5px;
  color: #757686;
}

.course-date::before {
  content: '/';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  text-align: center;
}

.course-content .entry-footer {
  margin-top: 14px;
}

.course-cost {
  font-size: 24px;
  font-weight: 700;
  color: #19c880;
}

.course-cost .price-drop {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: #c0c1cd;
  text-decoration: line-through
}

.course-cost .free-cost {
  font-size: 24px;
  font-weight: 700;
  color: #f3a90b;
}

.course-ratings {
  font-size: 13px;
  color: #c0c1cd;
}

.course-ratings span {
  margin-left: 1px;
}

.course-ratings .checked {
  color: #f3a90b;
}

.course-ratings .course-ratings-count {
  margin-left: 5px;
}
</style>