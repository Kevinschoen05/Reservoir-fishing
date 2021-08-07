<template>
  <router-view></router-view>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('loadRecords')
  },
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
