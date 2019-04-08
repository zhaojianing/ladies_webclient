<template>
  <div class="default-box">
    <div id="particles"></div>
    <PCHeader></PCHeader>
    <el-main class="content">
      <nuxt/>
    </el-main>
    <PCFooter></PCFooter>
  </div>
</template>

<script>
import { PCHeader, PCFooter } from "@/components/pc";
import particlesConfig from "@/plugins/particles_data.json";

export default {
  components: {
    PCHeader,
    PCFooter
  },
  mounted() {
    if (process.browser) {
      particlesJS("particles", particlesConfig);
    }
    console.log('%ci-yishan', 'color: #502de3;width:20px;height:32px;font-size:32px;padding:10px;font-weight:bold;');
    console.log('%c@Author:%cshan_Yi', 'background: #502de3; color: #fffffb;width:20px;height:20px;font-size:16px;padding:10px;','background: #af53ff; color: #fffffb;width:20px;height:20px;font-size:16px;padding:10px;');
    console.log('%c@Email:%czjn8752@163.com', 'background: #502de3; color: #fffffb;width:20px;height:16px;font-size:20px;padding:10px;','background: #af53ff; color: #fffffb;width:20px;height:20px;font-size:16px;padding:10px;');
    console.log('%c@网址:%chttps://ladies.ren/', 'background: #502de3; color: #fffffb;width:20px;height:16px;font-size:20px;padding:10px;','background: #af53ff; color: #fffffb;width:20px;height:20px;font-size:16px;padding:10px;');
  }
};
</script>

<style  lang="stylus" scoped>
@import '~@/assets/style/init';

.default-box {
  position relative
  z-index 1
  height 100%

  .content {
    padding 0
    display block
    min-height calc(100% - 280px)
    width 100%
    margin 0 auto
    background-color content_bgc
  }

  #particles {
    position fixed
    top 0
    width 100%
    // height 1080px
    height 100%
    background-repeat no-repeat
    background-size cover
    background-position 50% 50%
    z-index 0
  }
}
</style>
