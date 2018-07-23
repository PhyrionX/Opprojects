<template>
  <div class="loginPage">
    <div class="loginForm">
      <div class="loginHeader">
        <span>Login</span>
      </div>
      <div class="loginBody">
        <div class="formElement">
          <span>User</span><br/>
          <input type="text" v-model="user.user">
        </div>
        <div class="formElement">
          <span>Password</span><br/>
          <input type="text" v-model="user.password">
        </div>
        <br/>
        <div class="formElement">
          <div class="button" v-on:click="logIn()">Log</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    logIn() {
      console.log(this.user.user, this.user.password);
      this.$store.dispatch('logIn').then(() => {
        console.log('ok')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.loginPage {
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 30%;

  .loginForm {
    border: 2px solid green;
    border-radius: 10px;
    height: 200px;
    width: 250px;
    margin: 0 auto;
    overflow: hidden;

    .loginHeader {
      background-color: rgb(43, 167, 43);
      color: white;
      font-weight: bold;
      padding: 5px 15px;
    }

    .loginBody {
      padding: 5px 15px;
      height: calc(100% - (38px));

      .formElement {
        padding: 5px;
        overflow: hidden;

        input {
          width: 100%       
        }

        span {
          font-weight: bold;
          color: darkgreen;
        }

        .button {
          background-color: green;
          color: white;
          margin: 0 auto;
          width: 50px;
          text-align: center;
          padding: 5px 15px;
          border-radius: 10px;
          cursor: pointer;

          &:hover {
            background-color: darkgreen;
          }
        }
      }
    }
  }
}
</style>
