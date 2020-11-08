<template>
  <div class="login-container">
    <div class="inline-block switch-bg-btn" @click="switchClick">
      <span class="switch-span">切换背景</span>
    </div>
    <LoginCanvas v-if="loginBgCanvas === '01'" />
    <LoginCanvas2 v-if="loginBgCanvas === '02'" />
    <!-- 导航区域内容 -->
    <div class="login-content">
      <div class="home-header">
        <router-link class="link" to="/home">
          <img class="home-logo" src="@/assets/userLogo.jpeg" alt="biaochenxuying logo" />
        </router-link>
      </div>
      <div class="home-body">
        <div class="list">
          <router-link class="link" to="/index">
            文章
          </router-link>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://github.com/jiwenjie">
            github
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://juejin.im/user/2172290705921917">
            掘金
          </a>
          <a target="_blank" rel="noopener noreferrer" class="link" href="https://www.jianshu.com/u/32900d1ac96f">
            简书
          </a>
        </div>
        <div class="introduce"> 时光正好，未来可期，加油 ！ </div>
      </div>
    </div>
  </div>
</template>

<!-- ts 文件拆分 -->
<script lang="ts">
  // 两种动画背景
  import {
    Component,
    Vue
  } from 'vue-property-decorator'
  import login from './ts/login'

  @Component({
    mixins: [login],
  })
  export default class extends Vue {}
</script>

<!-- 样式文件拆分 -->
<style lang="scss" scoped>
  @import url("./css/login.scss");
</style>