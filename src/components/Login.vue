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
            <input type="email" placeholder="test@example.com" class="form-control input-lg" v-model="user.user">
          </div>
          <div class="form-group">
            <label class="control-label">Password</label>
            <input type="password" placeholder="password" class="form-control input-lg" v-model="user.password">
          </div>
          <button type="submit" class="btn btn-primary" v-on:click="logIn()">Sign in</button>
       </form>
      </section>
    </div>
  </section>
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
      event.preventDefault();
      console.log(this.user.user, this.user.password);
      let user = {
        login: this.user.user,
        password: this.user.password
      }
      this.$store.dispatch('logIn', user ).then(() => {
        console.log('ok')
      })
      .catch(() => {

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
            font-size: 13px;
            color: #717171;
          }

          .form-control {
            font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
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
            box-sizing: border-box;
          }
        }

        .btn-primary {
          color: #fff !important;
          background-color: #65bd77;
          border-color: #65bd77;
          border-top-color: rgb(101, 189, 119);
          border-right-color: rgb(101, 189, 119);
          border-bottom-color: rgb(101, 189, 119);
          border-left-color: rgb(101, 189, 119);

          display: inline-block;
          padding: 6px 12px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.42857143;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          background-image: none;

          &:hover {
            color: #fff !important;
            background-color: #53b567;
            border-color: #4bae5f;
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
