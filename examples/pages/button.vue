<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Button</span>
    </i-header>
    <i-button class="buttonList" type="danger" size="large" radius="none">Danger</i-button>
    <i-button class="buttonList" type="primary" size="large" radius="low" data-value='1'>Primary</i-button>
    <i-button class="buttonList" type="default" size="large" radius="half">Default</i-button>
    <i-button class="buttonList" type="danger" size="normal" radius="none">Danger</i-button>
    <i-button class="buttonList" type="primary" size="normal" radius="low">Primary</i-button>
    <i-button class="buttonList" type="default" size="normal"  radius="half">Default</i-button>
    <i-button class="buttonList" type="danger" size="small" radius="none">Danger</i-button>
    <i-button class="buttonList" type="primary" size="small" radius="low">Primary</i-button>
    <i-button class="buttonList" type="default" size="small"  radius="half">Default</i-button>
    <i-button class="buttonList" type="primary" size="large" radius="none" :disabled="disabled">Disabled</i-button>
    <i-button>Button</i-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        disabled: true,
        fixed: false,
        options: {
          data: 3
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
    .buttonList {
      margin: 10px 0;
    }
    img {
      margin: 30px 0;
      width: 100%;
      height: 350px;
    }
    .imgss{
      margin: 30px 0;
      width: 100%;
      height: 350px;
    }
  }
</style>