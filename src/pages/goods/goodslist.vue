<template>
  <listctn title="商品管理">
      <span slot="title">
          <button class="btn btn-primary" v-link="{path:'goodsedit'}"><span class="fa fa-plus"></span>&nbsp;新增</button>
      </span>
      <span slot="content">
        <vuetable url="/odb/goods" :columns="columns" :options="options"></vuetable>
      </span>
  </listctn>

</template>
<script>
  import vuetable from '../../components/widgets/table/table.vue'
  import listctn from '../../components/layout/listctn.vue'

  export default {
    components: {
      listctn,
      vuetable
    },
    data () {
      return {
        columns: ['name', 'desc', 'price', 'areaname', 'onlinedate'],
        options: {
          headings: {
            'name': '商品名称',
            'desc': '商品描述',
            'price': '总价',
            'areaname': '所属专区',
            'onlinedate': '上架日期'
          }
        },
        url: '/odb/goods'
      }
    }
  }
</script>
