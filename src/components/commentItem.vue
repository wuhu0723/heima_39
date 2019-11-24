<template>
    <div class="sour">
      <p>
        <span>{{data.user.nickname}} &nbsp;&nbsp;2小时前</span>
        <span >回复</span>
      </p>
      <div>{{data.content}}</div>
    </div>
</template>

<script>
export default {
  props: ['data']
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
