<template>
  <div class="nav">
    <div v-for="(item,index) in title"
         :key="index"
         class="nav-item"
         :class="{active: index === currentIndex }"
         @click="itemClick(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "LogoTopNav",
    data() {
      return {
        title: ['发现音乐','我的音乐','朋友','商场','音乐人','下载客户端'],
        currentIndex: 0,
        path: ['/findMusic', '/MyMusic','/Friends','/Market','/Musican','/DownLoadApp']
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$router.replace(this.path[index])
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: relative;
    line-height: 70px;
    height: 70px;
    float: left;
  }
  .nav-item {
    float: left;
    padding: 0 20px;
    cursor: pointer;
    color: #eee;
  }
  .nav-item:hover {
    background-color: rgba(241, 158, 190, .5);
  }
  .active {
    background-color: rgba(241, 158, 190, .5);
  }
</style>
