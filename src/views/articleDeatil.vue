<template>
  <div class="articleDeatil">
    <myheader>
      <div slot="left">
        <van-icon name="arrow-left" />
        <span class="iconfont iconnew"></span>
      </div>
      <div slot="right">
        <div class="btn">关注</div>
      </div>
    </myheader>
    <div class="content">
        <div class="title">{{article.title}}</div>
        <div class="info">
            <span>{{article.user.nickname}}</span>
            <span>2019-11-23</span>
        </div>
        <div class="articleContent" v-html='article.content'></div>
        <div class="opt">
            <van-button icon="good-job-o" type="primary" plain >{{article.like_length}}</van-button>
            <van-button icon="chat" type="primary" plain >微信</van-button>
        </div>
    </div>
    <div class="comment">
      <h2>精彩跟帖</h2>
      <div class="item">
        <div class="head">
          <img src="" alt />
          <div>
            <p>火星网友</p>
            <span>2小时前</span>
          </div>
          <span>回复</span>
        </div>
        <div class="text">文章说得很有道理</div>
      </div>
      <div class="more">更多跟帖</div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import myheader from '@/components/myheader.vue'
import { getArticleById } from '@/apis/article.js'
export default {
  data () {
    return {
      article: {}
    }
  },
  components: {
    myheader
  },
  async mounted () {
    let id = this.$route.params.id
    let res = await getArticleById(id)
    console.log(res)
    this.article = res.data.data
  }
}
</script>

<style lang='less' scoped>
// 0 0 2 0
.header {
    line-height: 40px;
  // /deep/：可以在父组件中修改子组件的样式：让父组件中的样式影响子组件
  /deep/.leftspan {
    width: 100px !important;
  }
  .iconnew {
    font-size: 50px;
  }
  .btn{
      width: 60px;
      height: 24px;
      border-radius: 12px;
      border:1px solid #ccc;
      line-height: 20px;
      text-align: center;
  }
}
.content{
    padding: 10px;
    .title{
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
    }
    .info{
        font-size: 12px;
        color:#999;
        > span:nth-child(2){
            margin-left: 15px;
        }
    }
    .articleContent{
        padding: 20px 0;
        font-size: 14px;
        color: #333;
        line-height: 26px;
        text-indent: 2em;
        /deep/img {
            width: 100%;
            display: block;
        }
    }
    .opt{
        display: flex;
        justify-content: space-around;
    }
}
.comment {
    border-top: 5px solid #ddd;
    padding: 0 15px;
    box-sizing: border-box;
    > h2 {
      line-height: 50px;
      text-align: center;
    }
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
