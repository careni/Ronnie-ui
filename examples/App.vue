<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
    overflow-y: scroll;
}
*{
  margin:0;
  padding:0;
}
body{
    overflow-x: hidden;
}
</style>
