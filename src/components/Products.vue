<template>
  <div class="container mt-5">
    <div v-if="isErr" class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hey</strong> {{errMsg}}.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- products -->
    <div class="d-flex justify-content-start">
      <Product v-for="product,index in products" :key="index" :product="product"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from './Product.vue';
export default {
  components: { Product },
  name: "Products",
  data() {
    return {
      products: [],
      errMsg: null,
      isErr: false,
    };
  },
  methods: {
    fetchProducts() {
      // var token = this.$session.get("token")
      axios.get("http://localhost:3000/api/products").then((res) => {
        if (res.status == 200) {
          console.log(res.data)
          this.products = res.data.products;
        } else {
          this.isErr = true;
          this.errMsg = res.statusText;
        }
      });
    },
  },
  created() {
    this.$store.commit("check", this);
    this.fetchProducts()
  },
};
</script>

<style>
</style>