<template>
  <div class="about">
    <div id="container">
      <el-row :gutter="20">
        <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
          <div>&nbsp;</div>
        </el-col>
        <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
          <div class="container-left">
            <h3>易山</h3>
            <div class="left-box">
              <span class="iconfont icon-nanren nanren"></span>
              <span>前端工程师，97年，空闲时间喜欢分享前端技术跟学习，喜欢安静，但是有一颗躁动的心，做事情喜欢跟有首有尾的人一起做事。</span>
            </div>
            <div class="left-box">
              <span class="iconfont icon-xingquaihao xingqu"></span>
              <span>喜欢喝茶，看书，炉石，音乐，happy coding</span>
            </div>
            <div class="left-box">
              <span class="iconfont icon-qianming qianming"></span>
              <span>比起奔向未知的茫然，守着旧梦湮灭是多么浪漫的事！</span>
            </div>
            <div class="left-box">
              <span class="iconfont icon-lujing lujing"></span>
              <span>NuxtJS，NodeJS...</span>
            </div>
            <div class="left-box">
              <span class="iconfont icon-zuobiaofill zuobiaofill"></span>
              <span>北京 - 海淀</span>
            </div>
          </div>
        </el-col>
        <el-col :xs="0" :sm="10" :md="8" :lg="6" :xl="4">
          <div class="container-right">
            <div class="image-box">
              <img src="http://ladies.ren:8080/img/myself.jpg" alt="头像">
              <p>shanYi</p>
            </div>
          </div>
          <div class="follow-box">
            <h3>Follow</h3>
            <div class="follow-icon">
              <a href="mailto:zjn8752@163.com" target="_black" title="给我发邮件 💗">
                <span class="el-icon-message"></span>
              </a>
              <a href="https://github.com/zhaojianing" target="_black" title="进入我的 GitHub 首页 💗">
                <span class="iconfont icon-github3"></span>
              </a>
              <a
                href="https://juejin.im/user/5aefab03f265da0b981b5c56"
                target="_black"
                title="进入我的掘金首页 💗"
              >
                <span class="iconfont icon-juejin"></span>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
          <div>&nbsp;</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { returnStatement } from "@babel/types";
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.about {
  .container-col>div, .container-right, .follow-box {
    border: 1px solid rgba(theme_bgc, 0.6);
    background-color: rgba(theme_bgc, 0.6);
    color: font_color;
    transition: 0.3s;
    padding: 20px;
    border-radius: 8px;
  }

  .container-left {
    h3 {
      padding: 0 0 10px 0;
      margin-bottom: 10px;
      text-align: center;
    }

    .left-box {
      margin-bottom: 30px;

      span:nth-child(1) {
        font-size: 24px;
        display: inline-block;
        width: 40px;
        vertical-align: top;
      }

      .nanren {
        color: about_man;
      }

      .xingqu {
        color: about_xingqu;
      }

      .qianming {
        color: about_qianming;
      }

      .lujing {
        color: about_lujing;
      }

      .zuobiaofill {
        color: about_zuobiaofill;
      }

      span:nth-child(2) {
        font-size: 14px;
        display: inline-block;
        width: calc(100% - 50px);
      }
    }
  }

  .container-right {
    .image-box {
      width: 100%;
      height: 100px;
      background: -webkit-linear-gradient(#733d37, rgba(theme_bgc, 0.8), rgba(theme_bgc, 0.8), rgba(index_bgc, 0.3)); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(#733d37, rgba(theme_bgc, 0.8), rgba(theme_bgc, 0.8), rgba(index_bgc, 0.3)); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(#733d37, rgba(theme_bgc, 0.8), rgba(theme_bgc, 0.8), rgba(index_bgc, 0.3)); /* Firefox 3.6 - 15 */
      background: linear-gradient(#733d37, rgba(theme_bgc, 0.8), rgba(theme_bgc, 0.8), rgba(index_bgc, 0.3)); /* 标准的语法 */
      text-align: center;

      img {
        height: calc(100% - 20px);
        border-radius: 50%;
      }

      p {
        height: 20px;
      }
    }
  }

  .follow-box {
    margin-top: 20px;
    text-align: center;

    .follow-icon {
      width: 100%;
      margin-top: 20px;

      a, span {
        display: inline-block;
        width: 30%;
        font-size: 24px;
      }

      a:nth-child(1) {
        color: #bb8757;
      }

      a:nth-child(2) {
        color: #605d68;
      }

      a:nth-child(3) {
        color: #006cff;
      }
    }
  }
}
</style>

