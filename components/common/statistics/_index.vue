<template>
  <div class="statistics">
    <h3>本站统计：</h3>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">站点运行：{{nummber}}天</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nummber: 0,
    }
  },
  created() {
    let start = '2019-03-26';
    start = new Date(start.replace(/-/g,"/"));
    let end = new Date();
    let time = end.getTime() - start.getTime();
    let InnerNum = parseInt(time/(1000*60*60*24));
    this.nummber = InnerNum;
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.statistics {
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(theme_bgc, 0.6);
  height: auto;
  border-radius: 10px;
  color: font_color;

  h3 {
    border-bottom: 1px solid font_color;
    padding-bottom: 4px;
    margin-bottom: 10px;
  }
}
</style>