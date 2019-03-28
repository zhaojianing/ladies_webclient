<template>
  <div class="font_color container-bg leaft-style">
    <el-card v-for="item in article" :key="item.id" class="box-card">
      <div class="container-titleBox">
        <h3 class="container-title container-init">{{ item.title }}</h3>
      </div>
      <div class="container-content">
        <div class="container-imgBox">
          <img src="~/assets/images/green.png" alt="Image">
        </div>
        <p class="container-mark">  {{ item.comments }} </p>
      </div>
      <div class="container-statistical">
        <div class="container-left container-init">
          <div class="container-type container-init"> {{ item.class }} </div>
          <div class="container-class container-init"> {{ item.type }} </div>
        </div>

        <div class="container-right container-init">
          <i class="el-icon-time"></i>
          <span class="container-mg"> {{ item.createdAt }} </span>
          <i class="el-icon-edit"></i>
          <span class="container-mg"> {{ item.author }} </span>
          <i class="el-icon-view"></i>
          <span class="container-mg"> {{ item.watch_length }} </span>
          <i class="el-icon-tickets"></i>
          <span class="container-mg"> {{ item.describe }} 条</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>
