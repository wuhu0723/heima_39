<template>
  <div class="personal">
    <router-link :to="`/editPersonal/${currentUser.id}`">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="currentUser.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{currentUser.nickname}}
          </div>
          <div class="time">{{currentUser.time | timeformat}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>

    <mycell title='我的关注' desc='关注的用户' @click="$router.push({name: 'Myfocus'})"></mycell>
    <mycell title='我的跟帖' desc='跟帖/回复'></mycell>
    <mycell title='我的收藏' desc='文章/视频' @click="$router.push({name: 'Mystars'})"></mycell>
    <mycell title='设置'></mycell>
    <!-- 添加退出按钮 -->
    <van-button type="primary" class="exitbtn" @click='exit'>退出</van-button>
  </div>
</template>

<script>
import mycell from '@/components/mycell.vue'
import { getUserInfoById } from '@/apis/users.js'
import { timeformat } from '@/utils/myfilters.js'
export default {
  data () {
    return {
      currentUser: {}
    }
  },
  components: {
    mycell
  },
  filters: {
    timeformat
  },
  async mounted () {
    let id = this.$route.params.id
    let res = await getUserInfoById(id)
    console.log(res)
    if (res.data.message === '获取成功') {
      this.currentUser = res.data.data
      this.currentUser.time = new Date()
      console.log(this.currentUser)

      // 处理图片
      if (this.currentUser.head_img) {
        // 拼接基准路径
        this.currentUser.head_img = localStorage.getItem('heima_39_baseurl') + this.currentUser.head_img
      } else {
        this.currentUser.head_img = localStorage.getItem('heima_39_baseurl') + '/uploads/image/default.png'
      }
    }
  },
  methods: {
    exit () {
      // 清空token
      // setItem(key,value)：设置
      // getItem(key)：获取
      // removeIte(key)：清除指定的key所对应的值
      // clear():全部清除
      localStorage.removeItem('heima_39_Authorization')
      // 清空id
      localStorage.removeItem('heima_39_id')
      // 重定向到首页
      this.$router.push('/')
    }
  }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.exitbtn{
  width: 90%;
  margin: 20px auto;
  display: block;
  border-radius: 10px;

}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    // viewport width >> vw
    // viewport height >> vh
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
