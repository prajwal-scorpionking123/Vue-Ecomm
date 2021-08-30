<template>
  <div class="container mt-5">
   <div v-if="isErr" class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hey!</strong> {{errMsg}}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <form @submit="handleSubmit">
      <div class="form-group mb-2">
          <label for="email">Enter Email</label>
          <input type="email" v-model="user.email"  class="form-control inputwidth" placeholder="email" required>
      </div>
      <div class="form-group mb-2">
          <label for="password">Enter Password</label>
          <input type="password" v-model="user.password" class="form-control inputwidth" placeholder="password" required>
      </div>
      <div class="form-group mb-2">
         <button type="submit" class="btn btn-primary">Signin</button>    
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Signin',
  data(){
    return{
      user:{
        email:'',
        password:''
      },
      isErr:false,
      errMsg:null
    }
  },
  methods:{
    handleSubmit(){
      var user = {
        "email":this.user.email,
        "password":this.user.password
      }
      axios.post("http://localhost:3000/api/users/auth",user).then((res)=>{
        if(res.status==200){
          this.$session.set('token', res.data.token);
          this.$session.set('email',this.user.email)
          this.$session.set('isAuthenticated',true)
          this.$store.commit('check',this)
          this.$router.push('dashboard')
        }else{
          this.errMsg=res.data.status
          this.isErr=true
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.inputwidth{
  width: 30%;
}
</style>