<template>
  <section class="message">
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="message-contenr" :xs="24" :sm="22" :md="22" :lg="20" :xl="14">
        <h3>“ 如果星空是一本书，我愿和你一起等待晴朗，如果大海是一本书，我愿和你数遍每一朵浪花，如果时间是一本书，我愿和你分秒相聚，章章不离。 ”</h3>
        <el-button class="message-btn" type="warning" plain>感谢遇见</el-button>
        <div class="message-box">
          <div class="envelope">
            <div class="header">
              <img :src="imgUrl" alt="头像">
              <span>shanYi - 阁下有感</span>
            </div>
            <div class="content">评论内容</div>
            <div class="footer">2019-04-07</div>
          </div>
          <div class="envelope">a</div>
          <div class="envelope">a</div>
          <div class="envelope">a</div>
          <div class="envelope">a</div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "http://ladies.ren:8080/img/titleLogo.png"
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.message-contenr {
  h3 {
    width: 60%;
    text-align: center;
    margin: 30px auto;
    font-size: 20px;
    font-weight: 400;
  }

  .message-btn {
    margin: 0px 50%;
    transform: translate(-50%);
    background-color: rgba(about_xingqu, 0.6);
    color: rgba(about_qianming, 0.8);
    border: none;
    margin-bottom: 20px;
  }

  .message-box {
    height: auto;
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row; /* 从左往右 */
    flex-wrap: wrap; /* 换行，第一行在上面 */
    justify-content: space-between; /* 对其方式 */

    .envelope {
      width: 28%;
      height: auto;
      background-color: rgba(theme_bgc, 0.6);
      margin-bottom: 20px;
      color: font_color;
      padding: 20px;
      border-radius: 6px;

      .header {
        height: 20px;
        line-height: 16px;
        font-size: 14px;

        img {
          height: 16px;
          margin-right: 10px;
        }

        span {
          vertical-align: top;
        }
      }

      .content {
        margin: 20px 0;
      }

      .footer {
        text-align: right;
      }
    }

    .envelope:hover {
      transform: translate(0, -5%);
      box-shadow: rgba(about_xingqu, 0.6) 2px 2px 10px 2px;
    }
  }
}
</style>
