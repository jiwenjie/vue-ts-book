<template>
  <div class="login-container">
    <!-- <div class="index-banner-space"> -->
    <!-- 展示 banner 图区域 -->
    <swiper :bannerList="bannerList"></swiper>
    <!-- <div id="bannerContentDIV" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide banner-detail"></div>
          <div class="swiper-slide banner-detail"></div>
          <div class="swiper-slide banner-detail"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white" style="bottom: 60px !important;"></div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<!-- ts 文件拆分 -->
<script lang="ts">
  // 两种动画背景
  import {
    Component,
    Vue
  } from 'vue-property-decorator'
  import index from './ts/index'
  import swiper from "@/components/swiper/swiper.vue"; // 引入轮播图插件

  @Component({
    mixins: [index],
    components: {
      swiper,
    }
  })
  export default class extends Vue {}

</script>

<!-- 样式文件拆分 -->
<style lang="scss" scoped>
  @import url("./css/index.scss");

</style>
