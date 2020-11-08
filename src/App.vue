<template>
  <div id="app">
    <Nav v-if="isShowNav" />
    <router-view />
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Watch
  } from 'vue-property-decorator'
  import {
    Route
  } from "vue-router";
  import Nav from "@/components/nav/nav.vue"; // @ is an alias to /src

  @Component({
    name: 'app',
    components: {
      Nav,
    }
  })
  export default class App extends Vue {
    private isShowNav: boolean = false;

    @Watch("$route")
    routeChange(val: Route, oldVal: Route): void {
      if (val.path === "/login") {
        this.isShowNav = false;
      } else {
        this.isShowNav = true;
      }
    }
  }
</script>