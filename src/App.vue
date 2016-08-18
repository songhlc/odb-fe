<template>
  <div>
  <sidebar></sidebar>
  <div id="page-wrapper" class="gray-bg">
    <div class="row border-bottom">
      <navbar></navbar>
    </div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import Sidebar from './components/widgets/sidebar/sidebar.vue'
import Navbar from './components/widgets/navbar/navbar.vue'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
  @import 'vendor/fontawesome/css/font-awesome.min.css';
  @import 'vendor/inspina/css/bootstrap.min.css';
  @import 'vendor/inspina/css/style.min.css';
</style>
<!--<style lang="less">-->
  <!--@import 'vendor/inspina/css/stylefix.less';-->
<!--</style>-->
