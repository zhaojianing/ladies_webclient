<template>
    <div class="font_color right-style">
      <h3>
        <span> <i class="el-icon-caret-right"></i> </span>
        <span>友情链接</span>
      </h3>
      <ul>
        <li v-for="item in title" :key="item.id">
          <span class="newlist-index"> {{ item.id }} </span>
          <span> {{ item.title }} </span>
        </li>
      </ul>
    </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>
