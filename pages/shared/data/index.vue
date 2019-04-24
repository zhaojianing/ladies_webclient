<template>
  <section>
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="data-contenr" :xs="24" :sm="22" :md="22" :lg="20" :xl="14">
        <h3>声明：所有权归所属作者所有，不牵涉任何商业行为，单纯资源共享！</h3>
        <h3>注明：望使用者不要随意分享，不得转载，否则永久取消进入权限！</h3>
        <div class="submit">
          <el-button @click="handleSubmit" class="data-btn" type="danger" plain>我要免费共享</el-button>
          <p v-show="isShow"> 添加站长 WX: zhaojianing6400 </p>
          <p v-show="isShow"> 站长验证通过会给您上墙！</p>
          <p v-show="isShow"> 感谢您的资源共享! </p>
        </div>

        <div class="data-box">
          <div class="list" v-for="item in data" :key="item.id">
            <h3>Author: {{ item.author }}</h3>
            <div>
              <p>{{ item.course }}</p>
              <p>{{ item.content }}</p>
              <p>账号： {{ item.username }}</p>
              <p>密码： {{ item.password }}</p>
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
      data: "",
      isShow: false
    };
  },
  created() {
    this.initLoad();
  },
  methods: {
    async initLoad() {
      let res = await this.$axios.get("getshared");
      this.data = res.data.data;
    },
    handleSubmit () {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.data-contenr {
  color: font_color;

  h3 {
    text-align: center;
    margin: 10px 0;
  }

  .submit {
    text-align: center;
    margin: 20px auto;
    p {
      background-color: rgba(callback_bgc,.6);
      color: font_color;
      padding: 4px 0;
    }
    .data-btn {
      background-color: rgba(about_lujing,.6);
      color: font_hover;
      border: none;
    }
  }

  .data-box {
    height: auto;
    width: 100%;
    background-color: rgba(theme_bgc, 0.6);
    border-radius: 6px;

    .list {
      padding: 10px;
      width: 70%;
      height: auto;
      background-color: rgba(content_bgc, 0.6);
      margin: 0px auto 10px;
      border-radius: 6px;

      p {
        text-align: center;
      }
    }
  }
}
</style>
