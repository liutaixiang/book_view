<template>
  <div class="header">
    <router-link to="/loginPage">
      <div class="header_menu">登录</div>
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 30px;
    position: fixed;
    left: 0;
    top: 0;
    color: #000;
    background-color: #C3BD5C;
  }
  .header_menu {
    padding=left: 60px;
    padding-top: 10px;
    float: right;
    color: #fff;
    font-size: 8px;
  }
</style>
