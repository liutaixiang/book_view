<template lang="html">
  <div>
    <div class="box">
      <div style="width: 30%; padding-top: 10%">
        <label>LOGIN</label>
        <div>
          <i-input type="text" v-model="username" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </div>
        <div class="box">
          <i-input type="password" v-model="password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </i-input>
        </div>
      </div>
    </div>

    <div class="box">
      <i-button type="primary" v-on:click="userLogin()">登录</i-button>
      <i-button type="ghost" v-on:click="userRegister()" style="margin-left: 10px">注册</i-button>
      <i-button type="text" v-on:click="findBackPassword()" style="margin-left: 10px">忘记密码</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    userLogin: function (event) {
      this.$http.post('http://localhost:3000/users/login', {username: this.username, password: this.password}).then((data) => {
        if (data.body.status == 1) {
          alert(data.body.message);
        } else {
          let save_token = {
            token: data.body.data.token,
            username: this.username
          };

          localStorage.setItem('token', data.body.data.token);
          localStorage.setItem('username', data.body.data.user[0].username);
          localStorage.setItem('_id', data.body.data.user[0]._id);
          this.$router.go(-1)
        }
      })
    },
    userRegister: function(event) {
      this.$router.push({path: 'register'});
    },
    findBackPassword: function(event) {
      this.$router.push({path: 'findPassword'});
    }
  }
};
</script>

<style lang="css" scoped>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
</style>
