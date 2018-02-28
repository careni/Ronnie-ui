<template>
  <div class="page">
    <i-button size="large" type="primary" @click="selectBank" class="button">click</i-button>
    <i-button size="large" type="primary" @click="selectDay" class="button">click</i-button>
    <i-button size="large" type="primary" @click="demo" class="button">click</i-button>
    <i-button size="large" type="primary" @click="demo" class="button">click</i-button>
    <i-button size="large" type="primary" @click="demo" class="button">click</i-button>
    <i-button size="large" type="primary" @click="demo" class="button">click</i-button>
    <i-button size="large" type="primary" @click="demo" class="button">click</i-button>
  </div>
</template>
<script>
  import * as city from '@/config/areaData_v2.js'
  import * as bank from '@/config/bank.js'
  export default {
    data () {
      return {
        iosProvinces: city.iosProvinces,
        iosCitys: city.iosCitys,
        iosCountys: city.iosCountys,
        bank: bank.bank
      }
    },
    methods: {
      demo () {
        let that = this
        this.$Picker(3, [that.levelone, that.leveltwo, that.levelthree], {
          itemsShow: 3
        })
      },
      selectBank () {
        this.$Picker(1, [this.bank], {
          itemsShow: 3
        })
      },
      selectDay () {
        // console.log(this.yearData, this.monthData, this.dateData, this.hourData, this.minuteData)
        // this.$Picker(5, [this.yearData, this.monthData, this.dateData, this.hourData, this.minuteData], {
        //   itemsShow: 3,
        //   relation: [0,0,0,0]
        // })
      }
    }
  }
</script>
<style lang='scss' scoped>
.button {
  margin: 10px auto;
}
</style>