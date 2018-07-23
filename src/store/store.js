import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    apps: [
      {id: 1, label: 'Motacas'},
      {id: 2, label: 'OPmoney'}
    ],
    login: {
      isAuth: false,
      username: '',
      token: ''
    }
  },
  mutations: {
    logIn(state, payload) {
      console.log(payload);
      state.login = {
        isAuth: true,
        username: 'Phyrion',
        token: 'token'
      }
    }
  },
  actions: {
    logIn(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('logIn', 'ok');
          resolve();
        }, 2000)
      })
    }
  }
})
