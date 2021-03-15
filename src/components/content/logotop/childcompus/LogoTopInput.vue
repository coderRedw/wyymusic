<template>
  <div class="search">
    <input type="search" placeholder="音乐/视频/电台/用户" @input="searchWords">
    <span>创建者中心</span>
    <a href="">登录</a>
    <logo-top-words :song-name-arr="songNameArr"/>
  </div>
</template>

<script>
  import LogoTopWords from "./LogoTopWords";

  import { navSearch } from "network/api";

  export default {
    name: "LogoTopInput",
    components: {
      LogoTopWords
    },
    data() {
      return {
        value: '',
        songNameArr: []
      }
    },
    methods: {
      searchWords(e) {
        this.value = e.target.value.trim()
        if (!this.value) return
        navSearch(this.value).then(res => {
          this.songNameArr = res.result.songs
        })
      },
      debounce(fn, delay=1000) {
        let timer = null
        return function () {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            fn()
          }, delay)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    float: left;
    height: 70px;
    line-height: 70px;
    margin-left: 40px;
    input[type=search] {
      width: 158px;
      height: 34px;
      border-radius: 20px;
      padding: 0 10px;
      border: 0;
      outline: none;
    }
    span {
      display: inline-block;
      color: #ccc;
      font-size: 12px;
      width: 120px;
      height: 34px;
      border: 1px solid rgba(100, 100, 100, .4);
      text-align: center;
      line-height: 34px;
      margin-left: 20px;
      border-radius: 20px;
      cursor: pointer;
    }
    a {
      padding-left: 20px;
      color: #ccc;
    }
  }
</style>
