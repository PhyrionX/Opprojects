import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    apps: [
    ],
    login: {
      isAuth: false,
      token: '',
      username: ''
    }
  },
  mutations: {
    logIn(state, payload) {
      state.login = {
        isAuth: true,
        token: payload.token,
        username: payload.username
      }
    },
    logOut(state, payload) {
      state.login = {
        isAuth: false,
        token: '',
        username: ''
      }
    },
    setApps(state, payload) {
      state.apps = payload;
    }
  },
  actions: {
    logIn(context, payload) {
      return Vue.http.post('http://localhost:8080/api/login', {
        username: payload.login,
        pass: payload.password
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', payload.password);
        context.commit('logIn', {
          token: response.data.token,
          username: payload.login
        });
      })
      //   => {
      //   setTimeout(() => {
      //     if (payload.login === "phyrion") {
      //       localStorage.setItem('token', 'soy un token XD');
      //       context.commit('logIn', 'soy un token XD');
      //       resolve();
      //     } else {
      //       reject('s');
      //     }
      //   }, 2000)
      // })
    },
    setApps(context) {
      console.log(context.state.login.token)
      return Vue.http.get('http://localhost:8080/api/private/apps', {
        headers: {
          authorization: 'Bearer ' + context.state.login.token
        }
      }).then((response) => {
        context.commit('setApps', response.data);
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
        context.commit('logIn', {
          token: localStorage.getItem('token'),
          username: localStorage.getItem('username')
        });
      }
    }
  }
})
