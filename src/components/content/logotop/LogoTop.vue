<template>
  <div id="logo-top">
    <div class="m-top">
      <h1 class="logo">
        <a href="">网易云音乐</a>
      </h1>
      <logo-top-nav/>
      <logo-top-input/>
    </div>
  </div>
</template>

<script>
  import LogoTopNav from "./childcompus/LogoTopNav";
  import LogoTopInput from "./childcompus/LogoTopInput";

  export default {
    name: "LogoTop",
    components: {
      LogoTopNav,
      LogoTopInput
    }
  }
</script>

<style scoped lang="scss">
  #logo-top {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background-color: rgb(36, 36, 36);
    .m-top {
      height: 70px;
      width: 1100px;
      margin: 0 auto;
      h1 {
        float: left;
        width: 176px;
        height: 69px;
        padding: 0;
        margin: 0;
        background: url("~assets/img/topbar.png") no-repeat;
        text-indent: -999px;
        cursor: pointer;
      }
    }
  }
</style>
