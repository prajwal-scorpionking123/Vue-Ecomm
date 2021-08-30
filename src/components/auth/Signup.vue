<template>
  <div class="container mt-5">
      <div v-if="isErr" class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hey!</strong> {{errMsg}}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group mb-2">
          <label for="first name">Enter First Name</label>
          <input type="text" v-model="user.fname"  class="form-control inputwidth" placeholder="first name" required>
      </div>
      <div class="form-group mb-2">
          <label for="last name">Enter Last Name</label>
          <input type="text" v-model="user.lname" class="form-control inputwidth" placeholder="last name" required>
      </div>
      <div class="form-group mb-2">
          <label for="email">Enter Email</label>
          <input type="email" v-model="user.email" class="form-control inputwidth" placeholder="email" required>
      </div>
      <div class="form-group mb-2">
          <label for="age">Enter age</label>
          <input type="number" v-model="user.age" class="form-control inputwidth" placeholder="age" required>
      </div>
      <div class="form-group mb-2">
          <label for="password">Enter Password</label>
          <input type="password" v-model="user.password"  class="form-control inputwidth" placeholder="password" required>
      </div>
      <div class="form-group mb-2">
         <button type="submit"  class="btn btn-primary">Signin</button>    
      </div>
      </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'Signup',
  data(){
      return{
          user:{
              fname:'',
              lname:'',
              email:'',
              age:0,
              password:''
          },
          errMsg:null,
          isErr:false
      }
  },
  methods:{
      handleSubmit(){
        var user = {
            "fname":this.user.fname,
            "lname":this.user.lname,
            "email":this.user.email,
            "age":Number.parseInt(this.user.age),
            "password":this.user.password,
            "role":2
        }
        axios.post("http://localhost:3000/api/users",user).then((res)=>{
            if(res.status==200){
                this.$router.push('signin')
            }else{
                this.errMsg=res.statusText
                this.isErr=true
            }
        }).catch((err)=>{
            console.log(err)
        })
      }
  },
  created(){
       this.$store.commit('check',this)
  }
}
</script>

<style scoped>
.inputwidth{
  width: 30%;
}
</style>