<template>
  <section class="opmoney-page panel">
    Opmoney
    <!-- <input type="text" v-model="salary"> -->
    <form action="" class="panel-body">
      <div class="form-group">
        <label class="control-label">Email</label>
        <input type="email" placeholder="test@example.com" class="form-control input-lg">
      </div>
      <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" placeholder="password" class="form-control input-lg">
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="logIn()">Sign in</button>
    </form>
    <div class="calendar">
      <section class="month" v-if="index >= startIn" v-for="(month, index) in months" v-bind:key="index">
        <header>
          <div>
            {{month}}
          </div>
        </header>
        <div class="body">
          <div class="variable-spend">s s</div>
          <div>a</div>
        </div>
        <footer v-if="index >= startIn">
          {{saldo + (salary * (index - startIn))}}
        </footer>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      startIn: 7,
      saldo: 12000,
      salary: 1750
    }
  },
  // methods: {
  //   redirectToApp(id) {
  //     switch(id) {
  //       case 1:
  //         this.$router.push('apps/oppmoney');
  //         break;
  //     }
  //   }
  // },
  // computed: {
  //   getApps() {
  //     return this.$store.state.apps;
  //   }
  // },
  // mounted() {
  //   // this.$store.dispatch('setApps', {});
  //   // alert('mounted');
  // }
}
</script>

<style scoped lang="scss">
.opmoney-page {
  .calendar {
    margin: 15px;
    // height: 150px;
    // background-color: white;
    overflow: hidden;

    .month {
      background-color: white;
      width: 25%;
      border: 1px;
      border: solid 1px #e4e4e4;
      height: 100%;
      float: left;
      box-sizing: border-box;
      height: 250px;
      display: table;

      @media (max-width: 992px) {
        width: 50%;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      header {
        display: table-row;
        vertical-align: top;
        height: 30px;
      }

      footer {
        // background-color: red;
        display: table-row;
        vertical-align: bottom;
        height: 20px;
      }

      .body {
        display: table-row;
        vertical-align: middle;

        .variable-spend {
          height: 25px;
          cursor: pointer;

          &:hover {
            background-color: #e4e4e4;
            border: solid 2px #717171;
            font-weight: bold;
          }
        }
      }
    }
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
  // &.panel {
  //   margin-bottom: 20px;
  //   background-color: #fff;
  //   border: 1px solid transparent;
  //   border-radius: 2px;
  //   box-shadow: 0 1px 1px rgba(0,0,0,.05);
  // }

  // .apps-list {
  //   background-color: #fefefe;
  //   color: #717171;
  //   overflow: hidden;
  //   box-sizing: border-box;

  //   .app-card {
  //     width: 33.333%;
  //     border-color: #e4e4e4;
  //     border-right: 1px solid #cfcfcf;
  //     padding: 15px 30px;
  //     height: 80px;
  //     float: left;
  //     box-sizing: border-box;
  //     font-size: 18px;
  //     cursor: pointer;

  //     &:hover {
  //       background-color: #cecece;
  //       color: white;
  //     }

  //     i {
  //       padding: 5px;
  //     }

  //     @media (max-width: 992px) {
  //       width: 50%;
  //     }

  //     @media (max-width: 768px) {
  //       width: 100%;
  //     }
  //   }
  // }
}
</style>
