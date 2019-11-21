<template>
  <div class="index">
      <div class="header">
          <div class="logo iconfont iconnew"></div>
          <div class="search" @click="$router.push('/search')">
              <van-icon name="search" />搜索新闻
          </div>
          <van-icon name="user-circle-o" class="icon_user" @click="goPersonal"/>
      </div>
      <!-- 添加标签页 -->
      <!-- active是当前被激活的标签页的索引值，索引从0开始 -->
      <van-tabs v-model="active" sticky swipeable >
        <van-tab :title="value.name" v-for="(value,index) in cateList" :key='index'>

        <van-list
        :immediate-check='false'
        :offset=5
        v-model="value.loading"
        :finished="value.finished"
        finished-text="没有更多了"
        @load="onLoad"
        loading-text='正在玩命加载.....'
        >
            <articleBlock v-for='(sv,si) in value.articleList' :key='si' :post='sv'></articleBlock>
        </van-list>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import { getCateList } from '@/apis/category.js'
import { getArticleList } from '@/apis/article.js'
import articleBlock from '@/components/articleBlock.vue'
export default {
  components: {
    articleBlock
  },
  data () {
    return {
      // 当前标签页的被激活项的索引
      // 如果是登陆用户，那么就应该设置了索引1，否则设置为索引0
      active: localStorage.getItem('heima_39_id') ? 1 : 0,
      // 栏目数据
      cateList: []
    }
  },
  watch: {
    //   监听当前被激活的标签项
    async active () {
      // 获取当前栏目的新闻数据
      let id = this.cateList[this.active].id
      console.log(id)
      //   根据id号获取数据
      //   let res = await getArticleList({ pageIndex: 1, pageSize: 10, category: id })
      //   console.log(res)
      //   // 将数据存储到当前栏目的数组中
      //   this.cateList[this.active].articleList = res.data.data
      if (this.cateList[this.active].articleList.length === 0) {
        this.init(id)
      }
    }
  },
  async mounted () {
    let res = await getCateList()
    if (res.data.data && res.data.data.length > 0) {
      this.cateList = res.data.data
      // 应该对数据进行改造：添加我们后期业务处理所需要的属性
      // 栏目的文章数据：articleList:[]
      // 当前页码：pageIndex
      // 当前每页所显示的数量：pageSize
      // map会执行回调函数，并将回调函数的结果存储到数组，最终将数组返回
      this.cateList = this.cateList.map(value => {
        return {
          ...value,
          articleList: [], // 当前栏目中的文章列表数据
          pageIndex: 1, // 当前栏目当前数据页码
          pageSize: 5, // 每页显示的记录数
          loading: false, // 上拉加载更多数据的加载状态，如果为true,则说明正在加载数据
          finished: false // 上拉加载更多 数据的完成状态，finished为true说明没有更多数据了
        }
      })
      console.log(this.cateList)
      //   获取当前默认栏目的文章数据
      this.init(this.cateList[this.active].id)
    }
  },
  methods: {
    //   上拉加载更多数据
    onLoad () {
      console.log(111)
      // 发起异步请求，获取下一页数据
      this.cateList[this.active].pageIndex++
      setTimeout(() => {
        this.init()
      }, 2000)
    },
    //   通过id号来获取指定栏目的文章数据
    async init () {
      let res = await getArticleList({ pageIndex: this.cateList[this.active].pageIndex, pageSize: this.cateList[this.active].pageSize, category: this.cateList[this.active].id })
      console.log(res)
      // 将数据存储到当前栏目的数组中
      this.cateList[this.active].articleList.push(...res.data.data)
      // 设置本次数据加载结束
      this.cateList[this.active].loading = false
      // 判断数据是否已经完全加载完毕
      if (res.data.data.length < this.cateList[this.active].pageSize) {
        this.cateList[this.active].finished = true
      }
    },
    //   单击导航项之后，获取该导航项所对应的文件列表数据
    // getdata (name, title) {
    //   console.log(this.active)
    // },
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
            height: 50/360*100vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f00;
            .logo{
                width: 50/360*100vw;
                height: 50/360*100vw;
                color: #fff;
                font-size: 60/360*100vw;
                line-height: 50/360*100vw;
                padding: 0 15/360*100vw;
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
                font-size: 16/360*100vw;
                .van-icon{
                    padding: 0px 5/360*100vw;
                }
            }
            .icon_user{
                width: 32/360*100vw;
                padding: 0 10/360*100vw;
                color: #fff;
                font-size: 25/360*100vw;
            }
        }
    }
</style>
