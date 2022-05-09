//import { sync } from 'vuex-router-sync';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoginValidations from './services/LoginValidations';
import store from './store/store';
//import UserController from '../server/app/Controllers/Http/UserController';


const app= createApp(App);
//sync(store. router);
app.use(router);
app.use(store);
app.use(new LoginValidations);
//app.use(UserController);
app.mount('#app');