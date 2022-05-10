<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
       <div class="request queue" style="display: block;">
           <table class="ListRequestTable">
               <thread class="ListRequestTableHead">
                   <tr class="ListRequestTableRow">
                       <th>ID</th>
                       <th>Username</th>
                       <th>Email</th>
                   </tr>
               </thread>
               <tbody class="ListRequestTable-Body"></tbody>
           </table>
       </div>
    <div>
            <h3>Registration Approval</h3>
            <hr />
        </div>
       <form @submit.prevent="onApprove()">
           <div class="form-group">
               <label>ID</label>
               <input type="ID" class="form-control" v-model="id" />
           </div>
           <div class="form-group">
               <label>Role</label>
               <input type="text" class="form-control" v-model="role" />
           </div>
           <div class="form-group">
               <label>Approve</label>
               <input type="checkbox" v-model="approve" />
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
import LoginButton from '../components/LogButton.vue';
import axios from "axios";
export default {
    name: "Login",
    components: {
        LoginButton,
    },
    data() {
        return {

        };
      },
      methods: {
          next() {
    axios.get('http://localhost:3333/api/v0/requests')
      .then(response => {
         this.rows = response.data
      }) 
      .catch(error => console.log(error))
        },


    onApprove() {
          axios.post(
               'http://localhost:3333/api/v0/approval/:id',
              {id: this.id, role: this.role, approve: this.approve}
              
            //   headers= {
            //     Authorization: `bearer ${token}`
            //     }
          ).then((response) => {
              console.log(response);
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          });
      },
    }
      
    };
    
</script>

<style>

</style>