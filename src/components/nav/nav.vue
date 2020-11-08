<template>
  <div>
    <div class="nav">
      <div class="nav-content">
        <el-row :gutter="20">
          <el-col :span="3" class="img-icon-space">
            <router-link to="/login">
              <img class="logo" src="@/assets/userLogo.jpeg" alt="BiaoChenXuYing">
            </router-link>
          </el-col>
          <el-col :span="16">
            <el-menu :router="true" :default-active="activeIndex" active-text-color="#409eff" class="el-menu-demo"
              mode="horizontal" @select="handleSelect">
              <el-menuItem :route="l.path" :index="l.index" v-for="l in list" :key="l.index">
                {{l.name}}
              </el-menuItem>
            </el-menu>
          </el-col>
          <el-col :span="4">
            <div class="nav-right">
              <el-button size="small" type="primary" @click="handleClick('login')">登录</el-button>
              <el-button size="small" type="danger" @click="handleClick('register')">注册</el-button>
            </div>
          </el-col>
        </el-row>
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
  import nav from './ts/nav'

  @Component({
    mixins: [nav],
  })
  export default class extends Vue {}
</script>

<!-- 样式文件拆分 -->
<style lang="scss" scoped>
  @import url("./css/nav.scss");
</style>