<template>
  <div class="container mt-3">
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
   <a href="#" class="btn btn-danger" @click="decrCount">-</a>
   <a href="#" class="btn btn-warning" @click="incrCount">+</a>
   <a href="#" class="btn btn-success" @click="addToCart()">AddToCart</a>
   <a href="#"  v-if="showBuy" class="btn btn-secondary" @click="buyNow()">Buy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Product',
    props:['product'],
    data(){
      return{
         count:0,
         showBuy:false
      }
    },
    methods:{
      addToCart(){
        this.showBuy=true
        var product={
          "product":this.product._id,
          "name":this.product.description,
          "price":Number.parseInt(this.product.price),
          "count":Number.parseInt(this.count),
          "photo":this.product.photo
        }
        this.$store.commit('addToCart',product)
      },
      incrCount(){
        this.count++
      },
      decrCount(){
        this.count--
      },
      buyNow(){
         this.$router.push('/cart')
      }
    }
};
</script>

<style>
</style>