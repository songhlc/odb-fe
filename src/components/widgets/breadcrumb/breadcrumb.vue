<template>
  <div>
    <span v-for="item in list">
      <a v-link="{path:item.link}"><span>{{item.title}}</span></a> \
    </span>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    ready () {
      this.list = [{
        title: '首页',
        link: '/index'
      }, {
        title: '商品',
        link: '/goods'
      }]
    }
  }
</script>
<style scoped>

</style>
