<template>
  <div id="app">
    <logo-top/>
    <top-nav :nav-title="['推荐','排行榜','歌单','主播电台','歌手','新碟上架']"/>
    <router-view/>
  </div>
</template>

<script>
  import LogoTop from "components/content/logotop/LogoTop";
  import TopNav from "components/content/topnav/TopNav";

  export default {
    name: 'App',
    components: {
      LogoTop,
      TopNav
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
