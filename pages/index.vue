<template>
  <section class="container">
    <el-row :gutter="20">
      <div class="notice">
        <i class="icon-ziyuan iconfont"></i>
        <span>： 地球之所以是圆的，是因为上帝想让那些走失或者迷路的人能够重新相遇。</span>
      </div>
      <el-col :xs="0" :sm="1" :md="1" :lg="4" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="12" :xl="10">
        <!-- 文章部分 -->
        <div v-for="item in article" :key="item.id" class="font_color container-bg leaft-style">
          <!-- <router-link :to="`/article-details/${item.id}`"> -->
          <router-link
            :to="{name:'article-details',query:{id:`${item.id}`,num:`${item.watch_length}`,mdId:`${item.md_id}`,vcmId:`${item.voicemail_id}`}}"
          >
            <div class="container-titleBox">
              <h3 class="container-title container-init">{{ item.title }}</h3>
            </div>
          </router-link>
          <div class="container-content">
            <div class="container-imgBox">
              <img :src="item.img_url" alt="Image">
              <!-- <img src="../assets/images/ceshi.jpg" alt="Image"> -->
            </div>
            <p class="container-mark">{{ item.comments }}</p>
          </div>
          <div class="container-statistical">
            <div class="container-left container-init">
              <div :class="item.classname">
              <!-- <div class="container-browser container-box container-init"> -->
                <router-link :to="{name:'asyncData'}">{{ item.class }}</router-link>
              </div>
              <div :class="item.typename">
              <!-- <div class="container-original container-init container-class-box"> -->
                <router-link :to="{name:'asyncData'}">{{ item.type }}</router-link>
              </div>
            </div>

            <div class="container-right container-init">
              <i class="el-icon-time"></i>
              <span class="container-mg">{{ item.createdAt }}</span>
              <i class="icon-zhuanlanyonghu iconfont"></i>
              <span class="container-mg hidden-xs-only">{{ item.author }}</span>
              <i class="icon-guankanliang iconfont"></i>
              <span class="container-mg hidden-xs-only">{{ item.watch_length }}</span>
              <i class="icon-pinglun iconfont"></i>
              <span class="container-mg hidden-xs-only">{{ item.describe }} 条</span>
            </div>
          </div>
        </div>
        <el-pagination @current-change="initLoad" class="index-page" :current-page="page" background layout="prev, pager, next" :total="pageTotal"></el-pagination>
      </el-col>
      <el-col :xs="0" :sm="10" :md="6" :lg="5" :xl="4">
        <!-- 右侧组件 -->
        <!-- <div class="font_color container-bg right-style"></div> -->
        <NewList></NewList>
        <Friends></Friends>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="4" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { NewList, Friends } from "@/components/common";
export default {
  data() {
    return {
      article: "",
      pageTotal: 10,
      page: 1,
    };
  },
  mounted() {
    this.initLoad();
  },
  methods: {
    async initLoad(page) {
      page = page || this.page;
      let res = await this.$axios.get(`article/${page}`);
      this.article = res.data.data;
      this.pageTotal = res.data.data.length;
    }
  },
  components: {
    NewList,
    Friends
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.container {
  .notice {
    overflow: hidden;
    margin: 20px 0;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: font_color;
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), theme_bgc, rgba(0, 0, 0, 0)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(0, 0, 0, 0), theme_bgc, rgba(0, 0, 0, 0)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(0, 0, 0, 0), theme_bgc, rgba(0, 0, 0, 0)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(0, 0, 0, 0), theme_bgc, rgba(0, 0, 0, 0)); /* 标准的语法 */
  }

  .container-col {
    margin: 0 auto;

    .index-page {
      margin: 0px 0 20px 0;
      text-align: center;

      button {
        background-color: rgba(black_bgc, 0.5);
      }
    }

    .leaft-style, .right-style {
      margin-bottom: 20px;
      padding: 20px;

      .container-titleBox {
        .container-title {
          margin-bottom: 10px;
        }

        .container-title:hover {
          cursor: pointer;
          color: font_hover;
          text-decoration: underline;
        }
      }

      .container-statistical {
        margin-top: 20px;
        font-size: 12px;
        line-height: 24px;

        .container-mg {
          margin-right: 10px;
        }
        
        .container-box {
          height: 20px;
          padding: 2px 6px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 4px;
        }
        .container-web {
          background-color: rgba(tag_bgc, 0.36);
          color: rgba(font_color, 0.8);
        }
        .container-browser {
          background-color: rgba(type_browser, 0.36);
          a {
            color: rgba(typefont_browser, 0.8);
          }
        }
        .container-server {
          background-color: rgba(type_red, 0.36);
          a {
            color: rgba(typefont_red, 0.8) !important;
          }
        }
        .container-skill {
          background-color: rgba(type_skill, 0.36);
          a {
            color: rgba(typefont_skill, 0.8) !important;
          }
        }
        .container-activity {
          background-color: rgba(type_activity, 0.36);
          a {
            color: rgba(typefont_activity, 0.8) !important;
          }
        }

        .container-class-box {
            height: 20px;
            padding: 2px 6px;
            font-size: 12px;
            line-height: 20px;
            border-radius: 4px;
        }
        .container-mixed {
          background-color: rgba(class_original, 0.36);

          a {
            color: rgba(classfont_original, 0.87) !important;
          }
        }
        .container-original {
          background-color: rgba(tag_mybgc, 0.36);

          a {
            color: rgba(tag_mycolor, 0.87) !important;
          }
        }

        .container-left {
          text-align: left;
        }

        .container-right {
          float: right;
          text-align: right;
        }

        .container-init {
          display: inline-block;
        }
      }

      .container-content {
        height: 102px;
        width: 100%;
        position: relative;

        .container-imgBox {
          position: absolute;
          left: 0;
          top: 0;
          width: 160px;
          height: 100px;
          display: inline-block;
          background-color: #fff;
          border: 1px solid #333;
          border-radius: 4px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            transition: all 0.6s;
          }

          img:hover {
            animation: changeBiger 4s linear forwards;
            animation-delay: 5s;
            -webkit-animation-delay: 5s;
            transform: scale(1.08);
          }
        }

        .container-mark {
          display: inline-block;
          width: calc(100% - 186px);
          margin-left: 180px;
          height: 102px;
        }

        .container-mark:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .el-row {
    margin: 0 !important;
  }

  .container-bg {
    background-color: rgba(theme_bgc, 0.6);
    height: 180px;
    border-radius: 10px;
  }
}
</style>
