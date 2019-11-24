<template>
  <div class="comments">
    <myheader title="精彩评论">
      <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
    </myheader>
    <div class="commentsList">
      <div class="item" v-for="value in articleComments" :key="value.id">
        <div class="head">
          <img :src="value.user.head_img" alt />
          <div>
            <p>{{value.user.nickname}}</p>
            <span>2小时前</span>
          </div>
          <span>回复</span>
        </div>
        <!-- 使用v-if判断是否需要创建评论块结构，标准就是parent是否是一个非空对象 -->
        <!-- 如果是非空对象，就创建评论块，并且传入parent数据 -->
        <commentItem v-if='value.parent' :data='value.parent'></commentItem>
        <div class="text">{{value.content}}</div>
      </div>
    </div>
    <commentFooter :post='article'></commentFooter>
  </div>
</template>

<script>
import { getArticleComments } from '@/apis/article.js'
import myheader from '@/components/myheader.vue'
import commentItem from '@/components/commentItem.vue'
import commentFooter from '@/components/commentFooter.vue'
export default {
  components: {
    myheader, commentItem, commentFooter
  },
  data () {
    return {
      article: {},
      articleComments: []
    }
  },
  async mounted () {
    let id = this.$route.params.id
    let res = await getArticleComments(id)
    console.log(res)
    this.articleComments = res.data.data
    this.articleComments.forEach(value => {
      value.user.head_img = value.user.head_img ? localStorage.getItem('heima_39_baseurl') + value.user.head_img : localStorage.getItem('heima_39_baseurl') + '/uploads/image/default.png'
    })
  }
}
</script>

<style lang='less' scoped>
.commentsList {
    border-top: 5px solid #ddd;
    padding: 0 15px 50px;
    box-sizing: border-box;
    .item {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > img {
          width: 50/360 * 100vw;
          height: 50/360 * 100vw;
          display: block;
          border-radius: 50%;
        }
        > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          > span {
            font-size: 12px;
            color: #999;
            line-height: 25px;
          }
        }
        > span {
          color: #999;
          font-size: 13px;
        }
      }
      .text {
        font-size: 14px;
        color: #333;
        padding: 20px 0 10px 0;
      }
    }
    .more {
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 15px;
      margin: 20px auto;
      font-size: 13px;
    }
  }
</style>
