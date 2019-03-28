<template>
  <section class="container">
    <el-row :gutter="20">
      <div class="notice">
        <i class="el-icon-bell"></i>
        <span>： 学历有时候很重要，可我没有（求职中...）-> email: zjn8752@163.com</span>
      </div>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
        <div  v-for="item in article" :key="item.id" class="font_color container-bg leaft-style">
            <div class="container-titleBox">
              <h3 class="container-title container-init">{{ item.title }}</h3>
            </div>
            <div class="container-content">
              <div class="container-imgBox">
                <img :src="item.img_url" alt="Image">
                <!-- <img src="../assets/images/ceshi.jpg" alt="Image"> -->
              </div>
              <p class="container-mark">{{ item.comments }}</p>
            </div>
            <div class="container-statistical">
              <div class="container-left container-init">
                <div class="container-type container-init">{{ item.class }}</div>
                <div class="container-class container-init">{{ item.type }}</div>
              </div>

              <div class="container-right container-init">
                <i class="el-icon-time"></i>
                <span class="container-mg">{{ item.createdAt }}</span>
                <i class="el-icon-edit"></i>
                <span class="container-mg">{{ item.author }}</span>
                <i class="el-icon-view"></i>
                <span class="container-mg">{{ item.watch_length }}</span>
                <i class="el-icon-tickets"></i>
                <span class="container-mg">{{ item.describe }} 条</span>
              </div>
            </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="10" :md="8" :lg="6" :xl="4">
        <div class="font_color container-bg right-style"></div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
// import { ArticleList } from "@/components/common"
export default {
  data() {
    return {
      article: "空"
    };
  },
  mounted() {
    this.initLoad();
  },
  methods: {
    async initLoad() {
      let res = await this.$axios.get("article/1");
      this.article = res.data.data;
    }
  },
  components: {
    // ArticleList
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.container {
  .notice {
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

    .leaft-style, .right-style {
      margin-bottom: 20px;
      padding: 20px;

      .container-titleBox {
        .container-title {
          margin-bottom: 10px;
        }
      }

      .container-statistical {
        margin-top: 20px;

        .container-mg {
          margin-right: 10px;
        }

        .container-type {
          height: 20px;
          background-color: rgba(tag_bgc, 0.36);
          color: rgba(font_color, 0.8);
          padding: 2px 6px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 4px;
        }

        .container-class {
          height: 20px;
          background-color: rgba(tag_mybgc, 0.36);
          color: rgba(tag_mycolor, 0.87);
          padding: 2px 6px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 4px;
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

          img {
            width: 100%;
            height: 100%;
          }
        }

        .container-mark {
          display: inline-block;
          width: calc(100% - 186px);
          margin-left: 180px;
          height: 102px;
        }
      }
    }
  }

  .el-row {
    margin: 0 !important;
  }

  .container-bg {
    background-color: rgba(#26262d, 0.6);
    height: 180px;
    border-radius: 10px;
  }
}
</style>
