<template>
  <section class="message">
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="message-contenr" :xs="24" :sm="22" :md="22" :lg="20" :xl="14">
        <h3>“ 世界上所有的相遇都是久别的重逢 ”</h3>
        <el-button class="message-btn" type="warning" plain @click="handleShow"> <i class="icon-b_maobi iconfont"></i> 以剑做笔 </el-button>

        <div class="font_color container-bg leaft-style vcmContainer" v-if="callMessage">
          <div class="cvmBtn">
            <el-button type="primary" icon="el-icon-edit" :loading="cvmLoding" @click="handleCvm">评论</el-button>
          </div>
          <h4 class="vcmTitle">发表留言</h4>
          <el-input placeholder="阁下尊姓大名(必填)" v-model="vcmName" autocomplete="on">
            <template slot="prepend">江湖名号:</template>
          </el-input>
          <el-input placeholder="阁下Email(必填)" v-model="vcmEmail" autocomplete="on">
            <template slot="prepend">江湖邮箱:</template>
          </el-input>
          <el-input placeholder="阁下博客(选填)" v-model="vcmUrl" autocomplete="on">
            <template slot="prepend">江湖博客:</template>
          </el-input>
          <el-input
            type="textarea"
            :autosize="{ minRows: 4}"
            placeholder="请输入阁下高见..."
            v-model="vcmMessage"
          ></el-input>
        </div>

        <div class="masonry">
          <div class="item" v-for="item in data" :key="item.id">
            <div class="item__content">
              <div class="header">
                <img :src="imgUrl" alt="头像">
                <span>{{item.name}} - 阁下有感</span>
              </div>
              <div class="content">{{item.content}}</div>
              <div class="footer">{{item.createdAt}}</div>
            </div>
          </div>
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
      imgUrl: "http://ladies.ren:8080/img/titleLogo.png",
      data: [],
      callMessage: false,
      // 留言btn 部分
      cvmLoding: false,
      vcmName: "",
      vcmEmail: "",
      vcmUrl: "",
      vcmMessage: ""
    };
  },
  created() {
    this.initLoad();
    if (process.browser) {
      this.vcmName = localStorage.name || "";
      this.vcmEmail = localStorage.vcmEmail || "";
      this.vcmUrl = localStorage.vcmUrl || "";
    }
  },
  methods: {
    async initLoad() {
      const { data } = await this.$axios.get("message/1");
      this.data = data.data;
    },
    // 发表留言部分
    async handleCvm() {
      this.cvmLoding = true;
      if (this.vcmName === "") {
        this.$message({
          message: "行走江湖，阁下留个名字呗",
          center: true
        });
        this.cvmLoding = false;
        return;
      } else if (this.vcmMessage === "") {
        this.$message({
          message: "还请阁下高见，鄙人在次等候多时了!",
          center: true
        });
        this.cvmLoding = false;
        return;
      }  else if (this.vcmEmail === "") {
        this.$message({
          message: "邮箱为必填项哦~~~",
          center: true
        });
        this.cvmLoding = false;
        return;
      }  else {
        if (process.browser) {
          localStorage.name = this.vcmName;
          localStorage.vcmEmail = this.vcmEmail;
          localStorage.vcmUrl = this.vcmUrl;
        }

        const { data, code } = await this.$axios.post("/createmessage", {
          name: this.vcmName,
          content: this.vcmMessage,
          email: this.vcmEmail,
          awesome: 0
        });
        this.cvmLoding = false;
        this.data = data.data;
      }
    },
    handleShow() {
      this.callMessage = !this.callMessage;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.masonry {
  column-count: 1;
  column-gap: 0;

  // counter-reset: item-counter;
  @media screen and (min-width: 400px) {
    column-count: 1;
  }

  @media screen and (min-width: 600px) {
    column-count: 2;
  }

  @media screen and (min-width: 800px) {
    column-count: 3;
  }

  @media screen and (min-width: 1100px) {
    column-count: 3;
  }
}

.item {
  box-sizing: border-box;
  break-inside: avoid;
  padding: 10px;

  &__content {
    height: auto;
    font-size: 14px;
    background: rgba(theme_bgc, 0.6);
    box-sizing: border-box;
    color: font_color;
    padding: 10px;
    border-radius: 6px;

    .header {
      height: 20px;
      line-height: 16px;

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

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      width: 2em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      font-weight: bold;
    }
  }
}

.message-contenr {
  .vcmContainer {
    margin: 20px 0;
  }

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

    .message-div:hover {
      transform: translate(0, -5%);
      box-shadow: rgba(about_xingqu, 0.6) 2px 2px 10px 2px;
    }
  }
}

.cvmBtn {
  float: right;
}
</style>
