<template>
  <listctn title="商品编辑">
    <span slot="content">
      <bs-input :value.sync="input"
                label="Username"
                help="Only allows lowercase letters and numbers."
                error="Insert username"
                placeholder="Username can't start with a number."
                pattern="^[a-z][a-z0-9]+$"
                :mask="mask"
                minlength="5"
                readonly
                required
                icon
      ></bs-input>
      </span>
  </listctn>
</template>
<script>
import listctn from '../../components/layout/listctn.vue'
import {bsInput} from 'vue-strap'
export default {
  components: {
    bsInput,
    listctn
  },
  ready () {
    debugger
  }
}
</script>
