<template>
              <div class="my-3">
                  <div class="col-md-6 offset-md-3">
            <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
               <router-link class="nav-link" to="/generatepage">
               <login-button type="submit" class="btn btn-primary" buttonText="Generate Schedule"></login-button>
                </router-link>
                </div>
                 <router-link class="nav-link" to="/myschedule">
               <login-button type="submit" class="btn btn-primary" buttonText="View Your Schedule"></login-button>
                </router-link>
                </div>
           </div>
          
</template>

<script>
import LoginButton from '../components/LogButton.vue';
export default {
     name: "Login",
    components: {
        LoginButton,
    },

};
</script>

<style>

</style>