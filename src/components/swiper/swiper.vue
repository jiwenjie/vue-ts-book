<!-- vue 实现轮播图 -->
<template>
  <div id="swiperDIV" :style="{height: height + 'px'}" @mouseover="suspend" @mouseout="autoPlay" @blur="suspend"
    @focus="autoPlay">
    <!-- 淡入淡出效果 -->
    <transition-group tag="ul" class="img-list" :name="animation">
      <li v-for="(item, index) in bannerList" :key="item.id" v-show="curIndex === index">
        <img :src="item[nameField]">
      </li>
    </transition-group>
    <!-- 操作按钮部分(底部导航器) -->
    <ul class="option-list" v-if="showPagination">
      <li class="option-list-item" :class="curIndex === index ? 'cur-option-style':''"
        v-for="(item, index) in bannerList" :key="item.id" @click="jump(item, index)"></li>
    </ul>

    <!-- 左侧右侧切换按钮 -->
    <template v-if="showBtn">
      <div class="common-btn-space pre-btn-space">
        <span class="common-btn-span pre-btn-span"></span>
      </div>
      <div class="common-btn-space next-btn-space">
        <span class="common-btn-span next-btn-span"></span>
      </div>
    </template>
  </div>
</template>

<!-- ts 文件拆分 -->
<script lang="ts">
  // 两种动画背景
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator'
  import swiper from './ts/swiper'

  @Component({
    name: 'Swiper',
    mixins: [swiper],
  })
  export default class extends Vue {}

</script>

<!-- 样式文件拆分 -->
<style lang="scss" scoped>
  @import url("./css/swiper.scss");

</style>
