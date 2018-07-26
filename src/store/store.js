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
      state.login = {
        isAuth: true,
        username: 'Phyrion',
        token: 'token'
      }
    },
    logOut(state, payload) {
      state.login = {
        isAuth: false,
        username: '',
        token: ''
      }
    }
  },
  actions: {
    logIn(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('logIn', {});
          resolve();
        }, 2000)
      })
    },
    logOut(context) {
      context.commit('logOut', {});
    }
  }
})
