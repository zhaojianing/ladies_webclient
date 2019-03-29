<template>
  <header class="header-box">
    <div class="header content">
      <img class="header-logo" :src="srcImg" alt="LOGO">
      <nuxt-link class="header-link" :to="{name:'index'}">首页</nuxt-link>
      <nuxt-link class="header-link" :to="{name:'asyncData'}">标签</nuxt-link>
      <nuxt-link class="header-link" :to="{name:'timeline'}">归档</nuxt-link>
      <nuxt-link class="header-link" :to="{name:'vuex'}">留言</nuxt-link>
      <div class="header-inner">
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
          <el-input placeholder="搜索文章" v-model="headerSearch">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </div>
    </div>
    <div class="header-banner">
      <div class="headerEyeLeaft-box">
        <div class="headerEye-leaft"></div>
      </div>
      <div class="headerEyeRight-box">
        <div class="headerEye-right"></div>
      </div>
    </div>
  </header>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>
