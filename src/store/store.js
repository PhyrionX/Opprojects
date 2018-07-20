import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    app: [
      {id: 1, label: 'Motacas'},
      {id: 2, label: 'OPmoney'}
    ]
  }
})
