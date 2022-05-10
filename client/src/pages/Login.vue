<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
        <div>
            <h3>Login</h3>
            <hr />
        </div>
       <form @submit.prevent="onLogin">
           <div class="form-group">
               <label>Email</label>
               <input type="text" class="form-control" v-model="email" />
               <div class="error" v-if="errors.email">{{errors.email}}</div>
           </div>
           <div class="form-group">
               <label>Password</label>
               <input type="password" class="form-control" v-model="password" />
               <div class="error" v-if="errors.password">{{errors.password}}</div>
           </div>
           <div class="my-3">
               <login-button type="submit" class="btn btn-primary" buttonText="Login"></login-button>
           </div>
       </form>
    </div>
    </div>
</div>
</template>
<script>
import LoginValidations from '../services/LoginValidations';
import LoginButton from '../components/LogButton.vue';
//import UserController from '../server/app/Controllers/Http/UserController';
import axios from "axios";
export default {
    name: "Login",
    components: {
        LoginButton,
    },
  data() {
      return {
          email: '',
          password: '',
          errors: {},
      };
  },
  methods: {
      onLogin() {
          axios.post(
               'http://localhost:3333/api/v0/auth/login',
              {email: this.email, password: this.password}
          ).then((response) => {
                console.log(response);
                //localStorage.setItem('projectToken', response.token);
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;

            // let token = response.data.access;
            // localStorage.setItem("SavedToken", 'Bearer ' + token);
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            // (this.$router.push({path:'./homepage'}));
            // console.log("this is the token "+token)
            // console.log(localStorage)
            //console.log(localStorage.getItem("this is in local storage "+ "SavedToken"))
          });
      },
            

//         token = localStorage.getItem('projectToken'),
       
//         if (!token) {
//   // navigate to login page
        
//        }
    // onLogin() {
    //       console.log('onLogin called')
    //        axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
    //         console.log(response)
    //        })
    //         // axios.post('http://localhost:3333/auth/register', {
    //         //         "email": "testemail4@test.com",
    //         //         "password": "password4"
    //         //     }
    //         // ).then(response => {
    //         //     console.log(response)
    //         // })
    //     //   let validations = new LoginValidations(
    //     //       this.username, 
    //     //       this.password,
    //     //       );
    //     //     this.errors = validations.checkValidations();
    //     //     if ('emails' in this.errors || 'password' in this.errors) {
    //     //         return false;
    //     //     }
    //     // console.log('here')
    //   },
  },
};
</script>