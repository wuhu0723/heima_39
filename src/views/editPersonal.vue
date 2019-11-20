<template>
  <div class="edit">
    <myheader title="编辑个人信息">
      <span slot="left" class="iconfont iconjiantou2" @click='$router.back()'></span>
    </myheader>
    <div class="info">
      <div class="userimg">
        <img :src="userobj.head_img" alt />
        <van-uploader :after-read="afterRead" :before-read='beforeRead'/>
      </div>
      <mycell title="昵称" :desc="userobj.nickname"></mycell>
      <mycell title="密码" :desc="userobj.password" type="password"></mycell>
      <mycell title="性别" :desc='userobj.gender===1?"男":"女"'></mycell>
    </div>
  </div>
</template>

<script>
import mycell from '@/components/mycell.vue'
import { getUserInfoById, updateUserInfo } from '@/apis/users.js'
import myheader from '@/components/myheader.vue'
import { uploadFile } from '@/apis/upload.js'
export default {
  components: {
    myheader,
    mycell
  },
  data () {
    return {
      id: '',
      userobj: {}
    }
  },
  methods: {
    // 文件读取之前触发
    // 这里面我们可以判断文件的类型或大小等相关信息，决定是否允许用户上传文件
    beforeRead (file) {
      if (file.type.indexOf('image/') !== 0) {
        this.$toast.fail('请选择图片，不要乱搞')
        return false
      }
      return true
    },
    // 当用户选择完文件之后，触发这个事件
    // file就是你当前所选择的文件对象
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      var formdata = new FormData()
      formdata.append('file', file.file)
      // 发起请求
      let res = await uploadFile(formdata)
      // 如果上传文件成功，则修改数据，实现页面的刷新
      if (res.data.message === '文件上传成功') {
        // 做预览刷新
        this.userobj.head_img = localStorage.getItem('heima_39_baseurl') + res.data.data.url
        // 实现数据的更新
        let res2 = await updateUserInfo(this.id, { head_img: res.data.data.url })
        if (res2.data.message === '修改成功') {
          this.$toast.success('修改成功')
        } else {
          this.$toast.fail('修改失败')
        }
      }
    }
  },
  async mounted () {
    this.id = this.$route.params.id
    let res = await getUserInfoById(this.id)
    console.log(res)
    if (res.data.message === '获取成功') {
      this.userobj = res.data.data
      this.userobj.head_img = this.userobj.head_img
        ? localStorage.getItem('heima_39_baseurl') + this.userobj.head_img
        : './avatar.jpg'
    }
  }
}
</script>

<style scoped lang='less'>
.info {
  background-color: #fff;
  .userimg {
    padding: 30px 0;
    text-align: center;
    position: relative;
    > img {
      width: 70/360 * 100vw;
      height: 70/360 * 100vw;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .van-uploader{
        width: 70px;
        height: 70px;
        position: relative;
        left: 0;
        top: 0;
        opacity: 0;
    }
  }
}
</style>
