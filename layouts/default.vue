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
  }
};
</script>

<style  lang="stylus" scoped>
@import '~@/assets/style/init';

.default-box {
  position relative
  z-index 1

  .content {
    padding 0
    display block
    width 100%
    margin 0 auto
    background-color content_bgc
  }

  #particles {
    position absolute
    top 0
    width 100%
    height calc(100% - 80px)
    background-repeat no-repeat
    background-size cover
    background-position 50% 50%
    z-index 0
  }
}
</style>
