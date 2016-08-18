<template>
  <div class="ibox">
    <div class="ibox-breadcrumb">
      <breadscrumb></breadscrumb>
    </div>
    <div class="ibox-title"><span class="box-title">{{title}}</span><slot name="title"></slot></div>
    <div class="ibox-content">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import breadscrumb from '../widgets/breadcrumb/breadcrumb.vue'

  export default {
    components: {
      breadscrumb
    },
    props: {
      title: {
        type: String
      }
    }

  }
</script>
<style scoped>
  .ibox-breadcrumb{
    padding: 10px 0;
  }
  .ibox-title{
    border: solid 1px #e7eaec;
    margin-bottom: 10px;
  }
  .ibox-title:empty{
    display: none;
  }
  .ibox-content{
    border-width:1px;
  }
  .box-title{
    font-size: 16px;
    line-height: 16px;
    color:#333;
    margin-right: 20px;
  }
</style>
