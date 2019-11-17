<template>
  <!-- 封装文本框，input是我们唯一的选择 -->
  <!-- input事件可以监听当前文本框的内容的变化 -->
  <input
    class="inp"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handlerinput"
    :class="{red:statu ==='error',green:statu==='success'}"
    @blur='handlerblur'
  />
</template>

<script>
// import { Toast } from 'vant'
export default {
  props: [
    // 定义输入提示
    'placeholder',
    // 定义文本框的value
    'value',
    // 定义当前文本框的验证规则
    'rules',
    // 定义错误信息
    'msg_err'
  ],
  data () {
    return {
      statu: ''
    }
  },
  methods: {
    //   处理输入
    handlerinput (event) {
      let v = event.target.value
      //   实现 子传父
      //   为了在使用封装组件时能够使用双向绑定，这个事件的名称只能叫input
      this.$emit('input', v)
      //   判断当前的输入的内容与传入的规则是否匹配
      if (this.rules && typeof this.rules === 'object') {
        if (this.rules.test(v)) {
          this.statu = 'success'
        } else {
          this.statu = 'error'
        }
      }
    },
    // 处理失去焦点
    handlerblur (event) {
      if (this.rules) {
        //   如果不满足传入的规则
        if (!this.rules.test(event.target.value)) {
          this.statu = 'error'
          // 给出提示
          //   this.$toast.fail(this.msg_err)
        }
      }
    }
  }
}
</script>

<style lang='less'>
.inp {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px #999 solid;
  line-height: 40px;
  font-size: 18px;
  outline: none;
  padding-left: 10px;
  box-sizing: border-box;
}
.red {
  border-color: Red;
}
.green {
  border-color: green;
}
</style>
