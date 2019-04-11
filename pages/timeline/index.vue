<template>
  <section class="container timeline">
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="container-col" :xs="24" :sm="12" :md="14" :lg="14" :xl="10">
        <!-- 时间部分 -->
        <el-timeline>
          <el-timeline-item v-for="item in title" :key="item.id" :timestamp="item.createdAt" placement="top">
            <el-card>
              <router-link :to="{name:'article-details',query:{id:`${item.id}`,num:`${item.watch_length}`,mdId:`${item.md_id}`,vcmId:`${item.voicemail_id}`}}">
              <p> {{item.title}} </p>
              </router-link>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :xs="0" :sm="10" :md="8" :lg="6" :xl="4">
        <!-- 右侧组件 -->
        <!-- <div class="font_color container-bg right-style"></div> -->
        <!-- <NewList></NewList> -->
        <Friends></Friends>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>