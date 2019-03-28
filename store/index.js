import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    }
  }


// const store = () => new Vuex.Store({
//   state: {
//     counter: 0
//   },
//   mutations: {
//     increment(state) {
//       state.counter++
//     }
//   },
//   modules: {
//     articlePage
//   }
// });

// export default store
