<template>
  <div class="top-nav">
    <div class="nav2">
      <div class="nav-item" v-for="(item, index) in navTitle" :class="{active: index === currentIndex }" @click="itemClick(index)">
        <a href="javascript:"><em>{{ item }}</em></a>
      </div>
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNav",
    props: {
      navTitle: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-nav {
    height: 35px;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    .nav2 {
      position: relative;
      width: 1100px;
      height: 35px;
      margin: 0 auto;
      line-height: 35px;
      padding-left: 180px;

      .icon {
        position: absolute;
        left: 213px;
        bottom: 30px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #C20C0C;
      }
      .nav-item {
        float: left;
        width: 100px;
        cursor: pointer;
        text-align: center;
        a {
          color: #fff;
          display: inline-block;
          padding: 0 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 10px;
        }
        &.active a {
          background-color: #9B0909;
        }
      }
    }
  }
</style>
