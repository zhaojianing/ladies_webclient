<template>
  <section class="container">
    <el-row :gutter="20">
      <div class="notice">文本</div>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
        <div class="font_color container-bg leaft-style">a</div>
      </el-col>
      <el-col :xs="0" :sm="10" :md="8" :lg="6" :xl="4">
        <div class="font_color container-bg right-style">a</div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  components: {}
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
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), #26262d, rgba(0, 0, 0, 0)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(0, 0, 0, 0), #26262d, rgba(0, 0, 0, 0)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(0, 0, 0, 0), #26262d, rgba(0, 0, 0, 0)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(0, 0, 0, 0), #26262d, rgba(0, 0, 0, 0)); /* 标准的语法 */
  }

  .container-col {
    margin: 0 auto;

    .leaft-style, .right-style {
      margin-bottom: 20px;
    }
  }

  .el-row {
    margin: 0 !important;
  }

  .container-bg {
    background-color: rgba(#26262d, 0.6);
    height: 200px;
    border-radius: 10px;
  }
}
</style>
