import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    apps: [
      {id: 1, label: 'Motacas'},
      {id: 2, label: 'OPmoney'},
      {id: 3, label: 'Crawler Inspector'}
    ],
    login: {
      isAuth: false,
      token: ''
    }
  },
  mutations: {
    logIn(state, payload) {
      state.login = {
        isAuth: true,
        token: payload
      }
    },
    logOut(state, payload) {
      state.login = {
        isAuth: false,
        token: ''
      }
    }
  },
  actions: {
    logIn(context, payload) {
      console.log(localStorage);
      console.log(payload)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (payload.login === "phyrion") {
            localStorage.setItem('token', 'soy un token XD');
            context.commit('logIn', 'soy un token XD');
            resolve();
          } else {
            reject('s');
          }
        }, 2000)
      })
    },
    logOut(context) {
      localStorage.removeItem('token');
      context.commit('logOut', {});
    },
    isLogin(context) {
      console.log('in');
      // console.log(this.$localStorage);
      if (localStorage.getItem('token')) {
        context.commit('logIn', 'soy un token XD');
      }
    }
  }
})
