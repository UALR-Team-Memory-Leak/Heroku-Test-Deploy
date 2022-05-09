//import createPersistedState from 'vuex-persistedstate';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    //strict: true,
   // state() {
     //   return {};
  //  },
    mutations,
    getters,
    actions,
    //plugins: [
   //     createPersistedState(),
   // ],
};