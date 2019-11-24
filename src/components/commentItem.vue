<template>
    <div class="sour">
        <!-- 需要判断是否还需要递归，v-if='data.parent'就是递归结束的标识 -->
        <!-- :data='data.parent'是组件所需要的数据 -->
      <mycomment v-if='data.parent' :data='data.parent'></mycomment>
      <!-- <comm v-if='data.parent' :data='data.parent'></comm> -->
      <p>
        <span>{{data.user.nickname}} &nbsp;&nbsp;2小时前</span>
        <span >回复</span>
      </p>
      <div>{{data.content}}</div>
    </div>
</template>

<script>
// import comm from '@/components/commentItem.vue'
export default {
  // name属性就是当前的组件注册，用于组件递归
  name: 'mycomment',
  props: ['data'],
  components: {
    // comm
  }
}
</script>

<style lang='less' scoped>
.sour {
  border: 1px solid #ddd;
  padding: 5px;
  color: #999;
  line-height: 25px;
  > p {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  > div {
    font-size: 13px;
  }
}
</style>
