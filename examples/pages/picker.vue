<template>
  <div class="page" @click="demo">
    111
  </div>
</template>
<script>
  import * as leveldata from '../../src/config/areaData_v2.js'
  export default {
    data () {
      return {
        levelone: leveldata.iosProvinces,
        leveltwo: leveldata.iosCitys
      }
    },
    methods: {
      demo () {
        this.$Picker(2, [this.levelone, this.leveltwo], {
        })
      }
    }
  }
</script>
<style lang='scss' scoped></style>