<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <!-- <myinput
            placeholder='请输入用户名'
            :value='userobj.username'
            @input='handleruserinput'
        ></myinput> -->
        <myinput
            placeholder='请输入手机号'
            v-model='userobj.username'
            :rules='/^1\d{10}$/'
            msg_err='手机号输入不正确'
        ></myinput>
        <!-- v-model是实现双向数据绑定
        1.数据赋值给元素：:value='userobj.username'
        2.元素的值影响源数据:@input='handleruserinput' -->
        <myinput
            placeholder='请输入密码'
            v-model='userobj.password'
        ></myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <mybutton text='登陆' @click='login' type='primary'></mybutton>
    </div>
  </div>
</template>

<script>
import mybutton from '@/components/mybutton.vue'
import myinput from '@/components/myinput.vue'
import { login } from '@/apis/users.js'
export default {
  components: {
    mybutton, myinput
  },
  data () {
    return {
      userobj: {
        username: 'jack',
        password: '123'
      }
    }
  },
  methods: {
    login () {
      login(this.userobj)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 接收子组件中传递的数据，获取用户输入
    handleruserinput (data) {
      this.userobj.username = data
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
