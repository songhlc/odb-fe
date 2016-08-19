<template>
  <listctn title="商品编辑">
    <span slot="content">
      <v-input :value.sync="good.name"
                label="名称"
                error="商品名称不能为空"
                placeholder="请输入商品名称."
                required
                icon
      ></v-input>
      <v-input :value.sync="good.desc"
               label="描述"
               error="商品描述不能为空"
               placeholder="请输入商品描述."
               required
               icon
      ></v-input>
      <v-input :value.sync="good.price"
               label="总价"
               error="Insert username"
               placeholder="请输入商品总价."
               required
               icon
      ></v-input>
      <div><label class="control-label">专区</label></div>
      <div class="form-group" >
        <v-select :options.sync="select.options" :value.sync="good.area">
        </v-select>
      </div>
      <div><label class="control-label">首次上线时间</label></div>
      <datepicker class="form-group"
        :value.sync="good.onlinedate"
        format="yyyy-MM-dd"
        :show-reset-button="reset">
      </datepicker>
      <v-input :value.sync="good.stock"
               label="库存数量"
               error="Insert username"
               placeholder="请输入库存数量."
               required
               icon
      ></v-input>
      <div class="form-group">
        <label for="isonline">是否在线</label>
        <input id="isonline" type="checkbox" checked="good.isonline">
      </div>
      <file-upload name="myFile" title="首页图" id="myCustomId" class="form-group" action="upload.php"></file-upload>
      <file-upload name="myFile" title="轮播图" id="myCustomId" class="form-group" action="upload.php"></file-upload>
      <editor :content.sync="good.content"></editor>
      <div class="form-group">
        <div class="btn btn-primary">保存</div>
        <div class="btn btn-default">取消</div>
      </div>

    </span>
  </listctn>
</template>
<script>
import listctn from '../../components/layout/listctn.vue'
import { input, select, datepicker, checkboxBtn } from 'vue-strap'
import fileUpload from '../../components/widgets/fileupload/fileupload.vue'
import editor from 'vue-html5-editor'
import Vue from 'vue'
Vue.use(editor, {name: 'editor'})
export default {
  components: {
    listctn,
    'v-input': input,
    'v-select': select,
    datepicker,
    'v-checkbox': checkboxBtn,
    fileUpload
  },
  ready () {

  },
  methods: {
    mask: function (value) {
      // change to lowercase, remove first non-letter and all other unsupported characters
      return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/\W/g, '')
    }
  },
  data () {
    return {
      select: {
        options: [
          {value: 1, label: '1元专区'}
        ],
        justified: true,
        value: 1
      },
      good: {
        area: 1,
        onlinedate: '2010-01-01',
        isonline: false,
        content: '<div>test</div>'

      }
    }
  }
}
</script>
