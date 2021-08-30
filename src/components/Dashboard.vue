<template>
  <div class="container">

  </div>
</template>

<script>
export default {
 name:'Dashboard',
 created(){
    this.$store.commit('check',this)
 }
}
</script>

<style>

</style>