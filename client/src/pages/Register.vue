<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
        <div>
            <h3>Register</h3>
            <hr />
        </div>
       <form @submit.prevent="onRegister()">
           <div class="form-group">
               <label>Email</label>
               <input type="text" class="form-control" v-model="email" />
               <div class="error" v-if="errors.email">{{errors.email}}</div>
           </div>
           <div class="form-group">
               <label>Username</label>
               <input type="text" class="form-control" v-model="username" />
               <div class="error" v-if="errors.username">{{errors.username}}</div>
           </div>
           <div class="form-group">
               <label>Password</label>
               <input type="password" class="form-control" v-model="password" />
               <div class="error" v-if="errors.password">{{errors.password}}</div>
           </div>

           <div class="my-3">
               <button type="submit" class="btn btn-primary">Register</button>
           </div>
       </form>
    </div>
    </div>
</div>
</template>
<script>
import LoginValidations from '../services/LoginValidations';
export default {
  data() {
      return {
          username: '',
          password: '',
          errors: {},
      };
  },
  methods: {
      onRegister() {
          let validations = new LoginValidations(
              this.email,
              this.username, 
              this.password,
              );

            this.errors = validations.checkValidations();
            if ('email' in this.errors || 'password' in this.errors || 'username' in this.errors) {
                return false;
            }
      }
  }
}
</script>
