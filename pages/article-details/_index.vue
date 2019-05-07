<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
        <!-- 文章部分 -->
        <div
          class="font_color details container-bg leaft-style"
          v-highlight
          v-html="$md.render(model)"
        ></div>
        <!-- 发表评论部分 -->
        <div class="font_color container-bg leaft-style vcmContainer">
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
        <!-- 回显评论部分 -->
        <div class="font_color container-bg leaft-style vcmShow">
          <div v-for="item in callShow" :key="item.id">
            <div class="vcmCallTit">
              <img :src="imgUrl" class="vcnImg">
              <span>{{item.name}} : 阁下有感</span>
              <div class="vamRight">{{item.createdAt}}</div>
            </div>
            <div class="vamMess">
              {{item.content}}
              <div class="vamTextRight">
                <div
                  class="vamCall"
                  @click="isShow(item.id,item.name)"
                  title="记得在上方发表留言处  留下邮箱，否则马车要赶好几天才能赶到洛阳"
                >
                  <i class="el-icon-message"></i>
                  <span>{{isShowText}}</span>
                  <span>{{item.reply_id}}</span>
                </div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;留言来自: {{item.version}}</span>
              </div>
              <!-- <callback :id="item.id" :data="callBackData"></callback> -->
              <div :ref="item.id" v-show="false" class="callbackBox">
                <!-- 展示回复信息部分 -->
                <div class="callback-for" v-for="call in callData" :key="call.id">
                  <div class="callback-title">
                    <img :src="imgUrl" alt="头像">
                    <span>{{call.name}}</span>
                    <span>回复</span>
                    <span>@{{ call.vo_name }}</span>
                  </div>
                  <div
                    class="callback-text"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ call.comments }}</div>
                  <div class="vamTextRight">
                    <div class="vamCall" title="记得在上方发表留言处  留下邮箱，否则马车要赶好几天才能赶到洛阳">
                      <i class="el-icon-message"></i>
                      <span @click="handlecallName(call.name,call.id)">回复</span>
                    </div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;留言来自: {{call.getv}}</span>
                  </div>
                </div>
                <!-- 回复表单 -->
                <div class="font_color leaft-style vcmContainer">
                  <div class="cvmBtn">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      @click="handleCall(item.id,item.id,item.reply_id)"
                    >回复</el-button>
                  </div>
                  <h4 class="vcmTitle">
                    回复：@ {{callget.name}}
                    <span
                      v-if="isShowCall"
                    >&nbsp;&nbsp;&nbsp;@ {{callget.twoname}}</span>
                  </h4>
                  <!-- <el-input placeholder="回复" v-model="callget.name"></el-input> -->
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
                    v-model="callvcmMessage"
                  ></el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { mapMutations } from "vuex";
import callback from "@/pages/callback/index";
// import getV from "@/plugins/getV";
// import hljs from "highlight.js";
// import md from "markdown-it";
// import "highlight.js/styles/tomorrow-night-eighties.css";
export default {
  components: {
    NewList,
    Friends,
    callback
  },
  computed: {
    article() {
      return this.$store.state.article.list;
    }
  },
  data() {
    return {
      model: "",
      describe: "", // 评论个数
      mdId: "",
      id: "",
      num: "",
      vcmId: "",
      vcmName: "", // 评论名称
      vcmEmail: "", // 评论邮箱
      vcmUrl: "", // 评论博客地址
      vcmMessage: "", //评论内容
      imgUrl: "http://ladies.ren:8080/img/titleLogo.png", // 图片地址
      interV: "", // 浏览器版本
      callShow: [], // 回显留言
      cvmLoding: false, // loading
      vamcallText: "", // 回复内容
      isVShow: false, // 是否显示回复模块
      isShowText: "回复",
      callBackData: "", // 回复面板需要的值
      callvcmMessage: "", // call 回复内容
      callData: [], // 返回内容
      callget: {}, // 回复信息数据
      isShowCall: false, // 是否显示回复信息@
      totalLength: 0, // 回复总数
      callId: 0,  // 二次回复id
    };
  },
  created() {
    // debugger
    // const highlighted = hljs.highlightAuto();
    // function highlight(str, __) {
    //   try {
    //     return (
    //       '<pre><code class="hljs">' +
    //       hljs.highlightAuto(str).value +
    //       "</code></pre>"
    //     );
    //   } catch (__) {
    //     console.log(__);
    //   }
    // }

    // const markdown = md({
    //   html: true,
    //   xhtmlOut: false,
    //   breaks: false,
    //   langPrefix: "language-",
    //   linkify: false,
    //   typographer: false,
    //   quotes: "“”‘’",
    //   highlight: highlight
    // });
    // markdown.renderer.rules.code_block = markdown.renderer.rules.fence;

    if (process.browser) {
      this.vcmName = localStorage.name || "";
      this.vcmEmail = localStorage.vcmEmail || "";
      this.vcmUrl = localStorage.vcmUrl || "";
    }
    // hljs.registerLanguage('javascript', javascript);

    this.$store.commit("article/add", this.$route.query);

    this.initLoad(this.article[0].mdId);
    // 添加观看人数加一
    this.watchAdd(this.article[0].id, this.article[0].num - 0 + 1);
    this.vcmId != "null" ? this.vcm(this.article[0].vcmId) : null;
  },
  methods: {
    // 首次文章加载数据
    async initLoad(id) {
      // 请求 md
      const {
        data: { code, data }
      } = await this.$axios.get(`details/${id}`);
      if (code === 200) {
        this.model = data.text;
      }
    },
    // 观看人数添加
    async watchAdd(id, num) {
      const {
        data: { code, data }
      } = await this.$axios.get(`watchadd/${id}-${num}`);
    },
    // 评论加载
    async vcm(id) {
      const { data } = await this.$axios.get(`vcmid/${id}`);
      this.callShow = data.data;
    },
    // 添加评论
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
      } else {
        if (process.browser) {
          localStorage.name = this.vcmName;
          localStorage.vcmEmail = this.vcmEmail;
          localStorage.vcmUrl = this.vcmUrl;
        }

        this.watchComment(this.article[0].id);

        // 添加评论操作
        ///(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
        let version;
        if (/(iPhone)/i.test(navigator.userAgent)) { //移动端
            //TODO
            version = 'iPhone';
        } else if (/(iPad)/i.test(navigator.userAgent)) {
            version = 'iPad';
        } else if (/(iOS)/i.test(navigator.userAgent)) {
            version = 'iOS';
        } else if (/(Android)/i.test(navigator.userAgent)) {
          version = 'Android';
        }else {
          version = window.getVersion().type +"---V" + window.getVersion().version.split(".")[0];
        }
        
        const { data, code } = await this.$axios.post("/createvcm", {
          name: this.vcmName,
          content: this.vcmMessage,
          article_id: this.article[0].vcmId,
          version: version,
          createdAt: new Date(),
          avatar: this.imgUrl,
          url: this.vcmUrl,
          reply_id: 0,
          email: this.vcmEmail
        });
        this.cvmLoding = false;
        this.vcm(this.article[0].vcmId);
      }
      // this.cvmLoding = false
    },
    // 查看评论人数操作
    async watchComment(id) {
      const { data } = await this.$axios.get(`/watchComment/${id}`);
      if (data.code === 200) {
        this.updataComment(id, data.data[0].describe + 1);
      }
    },
    // 更新评论人数
    async updataComment(id, num) {
      const { data } = await this.$axios.get(`/updataComment/${id}-${num}`);
    },
    // 显示隐藏回复模块
    isShow(id, name) {
      this.isShowCall = false;
      this.callget.twoname = "";
      this.callget.flag = false;

      this.callShow.map(list => {
        this.$refs[list.id][0].style.display = "none";
      });
      this.$refs[id][0].style.display === "block"
        ? (this.$refs[id][0].style.display = "none")
        : (this.$refs[id][0].style.display = "block");
      // this.$refs[id][0].parentElement.children[0].children[0].children[1]
      //   .innerHTML === "隐藏"
      //   ? (this.$refs[
      //       id
      //     ][0].parentElement.children[0].children[0].children[1].innerHTML =
      //       "回复")
      //   : (this.$refs[
      //       id
      //     ][0].parentElement.children[0].children[0].children[1].innerHTML =
      //       "隐藏");

      this.callget.name = name;
      this.callget.id = id;
      this.getCall(id);
    },
    // 查询当前的评论内容
    async getCall(id) {
      const { data } = await this.$axios.get(`callback/${id}`);
      this.callData = data.data;
    },
    // 回复信息
    async handleCall(voId, id, num) {
      if (this.vcmName === "") {
        this.$message({
          message: "行走江湖，阁下留个名字呗",
          center: true
        });
        this.cvmLoding = false;
        return;
      } else if (this.callvcmMessage === "") {
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
      } else {
        if (process.browser) {
          localStorage.name = this.vcmName;
          localStorage.vcmEmail = this.vcmEmail;
          localStorage.vcmUrl = this.vcmUrl;
        }

        // 添加评论操作
        ///(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
        let version;
        if (/(iPhone)/i.test(navigator.userAgent)) { //移动端
            //TODO
            version = 'iPhone';
        } else if (/(iPad)/i.test(navigator.userAgent)) {
            version = 'iPad';
        } else if (/(iOS)/i.test(navigator.userAgent)) {
            version = 'iOS';
        } else if (/(Android)/i.test(navigator.userAgent)) {
          version = 'Android';
        }else {
          version =window.getVersion().type +"---V" +window.getVersion().version.split(".")[0];
          
          let data;
          debugger
          if (this.isShowCall) {
            const callEmailData = await this.$axios.get("getCallEmail/"+this.callId);
            data = {
              img: this.imgUrl,
              vo_id: voId,
              vcmEmail: this.vcmEmail,
              vo_email: callEmailData.data.data[0].vcmEmail,
              name: this.vcmName,
              vo_name: this.callget.flag ? this.callget.twoname : this.callget.name,
              comments: this.callvcmMessage,
              getv: version
            };
          } else {
            const emailData = await this.$axios.get("getEmail/"+voId);
            data = {
              img: this.imgUrl,
              vo_id: voId,
              vcmEmail: this.vcmEmail,
              vo_email: emailData.data.data[0].email,
              name: this.vcmName,
              vo_name: this.callget.flag ? this.callget.twoname : this.callget.name,
              comments: this.callvcmMessage,
              getv: version
            };
          }
          
          const res = await this.$axios.post("createCall", data);
          this.callData = res.data.data;
          const update = await this.$axios.get(`updateVcm/${id}-${num + 1}`);
        }
      }
    },
    handlecallName(name,id) {
      this.callId = id;
      this.isShowCall = false;
      this.callget.twoname = "";
      this.isShowCall = true;
      this.callget.twoname = name;
      this.callget.flag = true;
      console.log(id,this.isShowCall)
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
    height: auto;

    .vamMess {
      padding: 0 0 10px 34px;
      border-bottom: 1px solid font_hover;

      .callbackBox {
        width: calc(100% - 20px);
        height: auto;
        background-color: rgba(callback_bgc, 0.6);
        margin-top: 20px;
        border: 1px solid theme_bgc;
        padding: 10px;

        .callback-for {
          margin-bottom: 10px;
          border-bottom: 1px dashed #999;
          padding-bottom: 10px;

          .callback-text {
            margin: 10px 0;
          }

          .callback-title {
            height: 20px;

            span {
            }

            img {
              width: 20px;
              vertical-align: bottom;
            }
          }
        }
      }

      .vamTextRight {
        text-align: right;
        margin-top: 10px;

        .vamCall {
          float: left;
        }

        .vamCall:hover {
          cursor: pointer;
          color: #ccc;
        }
      }
    }

    .vcmCallTit {
      width: 100%;
      height: 20px;
      line-height: 20px;
      margin-bottom: 20px;

      .vamRight {
        float: right;
      }

      span {
        vertical-align: top;
      }

      .vcnImg {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    img {
      width: 100%;
    }

    .vcmTitle {
      border-bottom: 1px solid font_color;
    }

    .cvmBtn {
      float: right;
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

