<template>
  <div class="statistics">
    <h3> <i class="el-icon-menu"></i> 文章分类：</h3>
    <div class="menuData" v-for="item in classificationData" :key="item">
        {{item}}
    </div>
  </div>
</template>

<script>
export default {
    props: ['classification'],
  data() {
    return {
      classificationData: [],
    }
  },
  mounted() {
    this.initLoad();
  },
  methods: {
    async initLoad(page) {
      let res = await this.$axios.get(`article/1`);
      let data = res.data.data;
      data.map(list => this.classificationData.push(list.class))
      let arr  = new Set(this.classificationData);
      this.classificationData = [...arr];
    }
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
  .menuData {
        display: inline-block;
        width: auto;
        height: 26px;
        border-radius:4px;
        background-color: rgba(#000,.6);
        color: rgba(font_hover,.8);
        vertical-align:middle;
        line-height:26px;
        padding: 2px 4px;
        margin-right:10px;
    }
    .menuData:hover {
        cursor: pointer;
        color: #fff;    
    }
}
</style>