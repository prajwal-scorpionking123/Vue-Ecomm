<template>
  <div class="container mt-3">
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight" v-for="product,index in carts" :key="index">
    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="require('../assets/' + product.photo)" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{product.category}}</h5>
        <p class="card-text">
          {{product.description}}
        </p>
        <p class="card-text">
          {{product.price}}
        </p>
        <p class="card-text">
         Quantity: {{count}}
        </p>
      </div>
    </div>
  </div>

</div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
 name:'Cart',
 data(){
     return{
         products:[]
     }
 },
 computed:{
     ...mapState(['carts'])
 }
}
</script>

<style>

</style>