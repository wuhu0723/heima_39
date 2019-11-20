<template>
  <div class="edit">
      <myheader title='编辑个人信息'>
        <span slot='left' class="iconfont iconjiantou2">返回</span>
      </myheader>
  </div>
</template>

<script>
// import mycell from '@/components/mycell.vue'
import { getUserInfoById } from '@/apis/users.js'
import myheader from '@/components/myheader.vue'
export default {
  components: {
    myheader
  },
  async mounted () {
    let res = await getUserInfoById(this.$route.params.id)
    console.log(res)
  }
}
</script>

<style>

</style>
