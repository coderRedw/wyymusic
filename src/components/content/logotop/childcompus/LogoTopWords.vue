<template>
  <div class="words clear-fix" v-if="songNameArr.length !== 0">
    <div class="top">
      <span class="top-title">搜"{{ songNameArr[0].artists[0].name }}"相关用户></span>
    </div>
    <div class="main">
      <div class="left">
        <div class="d">单曲</div>
        <div class="g">歌手</div>
        <div class="j">专辑</div>
      </div>
      <div class="right">
        <div class="song">{{ songNameArr[1].name }}-{{ songNameArr[1].artists[0].name}}</div>
        <div class="sing" >
          <div class="item" v-for="(item,index) in songNameArr" v-if="index < 3">{{ item.artists[0].name}}</div>
        </div>
        <div class="sell">{{ songNameArr[0].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LogoTopWords",
    props: {
      songNameArr: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .words {
    position: relative;
    bottom: 10px;
    left: 0;
    background-color: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px rgba(100, 100, 100, .4), 2px 2px 5px rgba(100, 100, 100, .4);
    border-radius: 5px;
    .top {
      position: relative;
      z-index: 10;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      border-bottom: 1px solid rgba(100, 100, 100, .3);
      color: #666;
      font-size: 12px;
    }
    .main {
      line-height: 30px;
      font-size: 12px;
      height: 100%;
      background-color: #fff;
      .left {
        float: left;
        width: 48px;
        height: 200px;
        padding-left: 10px;
        border-right: 1px solid #ccc;
        .d {
          height: 30px;
        }
        .g {
          height: 80px;
        }
        .j {
          height: 30px;
        }
      }
      .right {
        float: left;
        padding-left: 10px;
        background-color: #fff;
        overflow: hidden;
        .song, .sing {
          border-bottom: 1px solid #ccc;
        }
        .sell, .sing {
          padding-top: 10px;
        }
      }
    }
  }
</style>
