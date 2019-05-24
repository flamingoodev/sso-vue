<template>
  <div class="login-body">
    <el-card shadow="always" class="login-card">
      <div slot="header" class="login-title">
        <img src="@/assets/images/logo.png" class="login-logo"/><br>
        <span>欢迎使用单点登录管理系统</span>
      </div>
      <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form" size="medium">
        <el-form-item label="电子邮箱" prop="username" size="small">
          <el-input prefix-icon="iconfont icon-email" size="small" v-model="loginForm.username" placeholder="电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" size="small">
          <el-input prefix-icon="iconfont icon-password" type="password" show-password size="small" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-bottom">
        <el-button type="primary" icon="iconfont icon-security" size="small" :loading="loading" @click="toLogin()" style="width: 100%">&nbsp;&nbsp;安全登录</el-button>
        <p>
          <el-link type="primary" href="https://github.com/login" target="_blank">忘记密码？</el-link>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入电子邮箱'))
      } else {
        callback()
      }
    }
    let checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toLogin () {
      this.loading = true
      this.$api.user.userList().then(res => {
        this.loading = false
        this.$router.replace('/')
        console.log(res.data)
      }).catch(err => {
        this.loading = false
        console.log(err.statusText)
      })
    }
  }
}
</script>

<style scoped>
  .login-body {
    position: absolute;
    top: 5%;
    left: calc(50% - 200px);
    width: 370px;
    height: 45%;
  }
  .login-title {
    font-size: 16px;
  }
  .login-card {
    padding: 16px;
    height: 100%;
  }
  .login-logo {
    width: 35px;
    height: 35px;
  }
  .login-form {
    font-size: 14px;
  }
  .login-bottom {
    width: 100%;
    padding-top: 20px;
    font-size: 14px;
  }
</style>
