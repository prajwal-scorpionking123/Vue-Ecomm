<template>
  <div class="container mt-5">
      products
  </div>
</template>

<script>
export default {
name:"Products",
created(){
   this.$store.commit('check',this)
}
}
</script>

<style>

</style>