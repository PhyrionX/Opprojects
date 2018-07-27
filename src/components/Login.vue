<template>
  <section class="login-page">
    <div class="card">
      <!-- <a class="navbar-brand block" href="index.html">Notebook</a> -->
      <section class="panel">
        <header class="panel-heading">
          <strong>Sign in</strong>
        </header>
        <form action="" class="panel-body">
          <div class="form-group">
            <label class="control-label">Email</label>
            <input type="email" placeholder="test@example.com" class="form-control input-lg">
          </div>
        </form>
      </section>
    </div>
  </section>
  <!-- <div class="loginPage">
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
  </div> -->
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
.login-page {
  margin-top: 30px;
  padding: 20px;



  .card {
    width: 450px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;

    .panel {
      background-color: #fff;
      border-color: #e8e8e8;
      margin-top: 30px;
      margin-bottom: 20px;
      border-radius: 2px;
      border: 1px solid #717171;
      box-shadow: 0 1px 1px rgba(0,0,0,.05);

      .panel-heading {
        color: #333;
        background-color: #f5f5f5;
        padding: 10px 15px;
        border-bottom: 1px solid #e8e8e8;
        text-align: center;
      }

      .panel-body {
        padding: 30px;

        .form-group {
          margin-bottom: 15px;

          label {
            display: inline-block;
            max-width: 100%;
            margin-bottom: 5px;
          }

          .form-control {
              border-color: #d9d9d9;
              border-radius: 2px;
               height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    width: 100%;
color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
          }
        }
      }
    }
  }
}

// .loginPage {
//   position: absolute;
//   overflow: hidden;
//   width: 100%;
//   top: 30%;

//   .loginForm {
//     border: 2px solid green;
//     border-radius: 10px;
//     height: 200px;
//     width: 250px;
//     margin: 0 auto;
//     overflow: hidden;

//     .loginHeader {
//       background-color: rgb(43, 167, 43);
//       color: white;
//       font-weight: bold;
//       padding: 5px 15px;
//     }

//     .loginBody {
//       padding: 5px 15px;
//       height: calc(100% - (38px));

//       .formElement {
//         padding: 5px;
//         overflow: hidden;

//         input {
//           width: 95%
//         }

//         span {
//           font-weight: bold;
//           color: darkgreen;
//         }

//         .button {
//           background-color: green;
//           color: white;
//           margin: 0 auto;
//           width: 50px;
//           text-align: center;
//           padding: 5px 15px;
//           border-radius: 10px;
//           cursor: pointer;

//           &:hover {
//             background-color: darkgreen;
//           }
//         }
//       }
//     }
//   }
// }
</style>
