import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store=new Vuex.Store({
  state:{
    count: 10,
    num: 1
  },
  getters:{

  },
  mutations:{
    add(state,payload){
      state.count++;
    },
    reduce(state,payload){
      if(state.count == 0) return;
      state.count--;
    }
  },
  actions:{},

});
export default store;
