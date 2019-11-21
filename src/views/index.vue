<template>
  <div class="index">
      <div class="header">
          <div class="logo iconfont iconnew"></div>
          <div class="search" @click="$router.push('/search')">
              <van-icon name="search" />搜索新闻
          </div>
          <van-icon name="user-circle-o" class="icon_user" @click="goPersonal"/>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转到个人中心页
    goPersonal () {
      let token = localStorage.getItem('heima_39_Authorization')
      if (token) {
        this.$router.push(`/personal/${localStorage.getItem('heima_39_id')}`)
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style lang='less' scoped>
    .index{
        .header{
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f00;
            .logo{
                width: 50/360*100vw;
                height: 50/360*100vw;
                color: #fff;
                font-size: 60px;
                line-height: 50px;
                padding: 0 15px;
            }
            .search{
                flex: 1;
                height: 36/360*100vw;
                background-color: rgba(255,255,255,0.5);
                border-radius: 18/360*100vw;
                color: #fff;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                .van-icon{
                    padding: 0px 5px;
                }
            }
            .icon_user{
                width: 32/360*100vw;
                padding: 0 10px;
                color: #fff;
                font-size: 25px;
            }
        }
    }
</style>
