<template>
  <v-server-table :url="url" :columns="columns" :options="computeOptions"></v-server-table>
</template>
<script>
  import vuetable from 'vue-tables'
  import Vue from 'vue'

  Vue.use(vuetable.server)
  export default {
    components: {
    },
    ready () {

    },
    props: {
      url: {
        type: String,
        default: ''
      },
      columns: {
        type: Array,
        default: []
      },
      options: {
        type: Object,
        default: {}
      }
    },
    computed: {
      computeOptions () {
        this.options.texts = this.defaultOptions.texts
        return this.options
      }
    },
    data () {
      return {
        defaultOptions: {
          texts: {
            count: '总共 {count} 条',
            filter: '查询:',
            filterPlaceholder: '商品名称',
            limit: '每页显示:',
            page: 'Page:',
            noResults: '暂无数据',
            filterBy: '按照 {column} 筛选',
            loading: '加载中...',
            defaultOption: '已选择 {column}'
          }
        }
      }
    }
  }
</script>
