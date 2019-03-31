<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
        <!-- 文章部分 -->
        <div class="font_color container-bg leaft-style" v-html="$md.render(model)"></div>
      </el-col>
      <el-col :xs="0" :sm="10" :md="8" :lg="6" :xl="4">
        <NewList></NewList>
        <Friends></Friends>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { NewList, Friends } from "@/components/common";
export default {
  components: {
    NewList,
    Friends
  },
  data() {
    return {
      model: ""
    };
  },
  created() {
    // 查询 文章详情
    this.initLoad(this.$route.params.id);
    // 添加观看人数加一
    this.watchAdd(this.$route.params.id,this.$route.params.num-0+1);
  },
  methods: {
    async initLoad(id) {
      // 请求 md 
      const {
        data: { code, data }
      } = await this.$axios.get(`details/${id}`);
      if (code === 200) {
        this.model = data.text;
      }
    },
    async watchAdd(id,num) {
      const {
        data: { code, data }
      } = await this.$axios.get(`watchadd/${id}-${num}`);
    }
  }
};
</script>
<style lang="stylus" scoped>
// 待优化 copy 自 page -> index
@import '~@/assets/style/init';

.container-col {
  margin: 0 auto;

  .container-bg {
    background-color: rgba(theme_bgc, 0.6);
    height: 180px;
    border-radius: 10px;
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
      }
    }

    .container-statistical {
      margin-top: 20px;
      font-size: 12px;
      line-height: 24px;

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
        padding: 2px 6px;
        font-size: 12px;
        line-height: 20px;
        border-radius: 4px;

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
          cursor: pointer;
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
        cursor: pointer;
      }
    }
  }
}
</style>

