<template>
  <div class="login-container">
    <form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Форма Входа</h3>
      </div>

      <div class="form-item" prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <input
          ref="username"
          v-model="loginForm.username"
          placeholder="Имя пользователя"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </div>

      <div class="form-item pass-form" prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Пароль"
          name="password"
          tabindex="2"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </div>

      <button type="primary" style="width:100%;margin-bottom:30px;" @click.prevent="handleLogin">Войти</button>

      <div class="tips">
        <span style="margin-right:20px;">имя пользователя: admin</span>
        <span>пароль: admin</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    handleLogin() {
      if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
        // Переход на страницу /admin-shop
        this.$router.push('/admin-shop')
      } else {
        // Вывод сообщения об ошибке или другие действия
        console.log('Неверное имя пользователя или пароль')
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 20px 10px 15px 20px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$menuActiveText:#409EFF;
$menuBg:#304156;
$menuText:#bfcbd9;
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
form{
  input{
    width: 400px;
    padding: 20px 0 15px 20px;
    margin-bottom: 15px;
    background-color: $menuBg;
    border-radius: 30px;
    color: $menuText;
  }
  button{
    background-color: $menuActiveText;
    border-radius: 30px;
    padding: 20px 0 15px 20px;
    color: $menuText;
    margin-bottom: 15px;
    font-size: 16px;
  }
}
</style>
