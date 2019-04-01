<template>
    <div class="font_color right-style">
      
        <h3>
            <span> <i class="el-icon-document"></i> </span>
            <span>最新文章</span>
        </h3>
      <ul>
        <li v-for="item in title" :key="item.id">
            <router-link :to="{name:'article-details',params:{id:`${item.id}`,num:`${item.watch_length}`,mdId:`${item.md_id}`}}">
                <span class="newlist-index"> {{ item.id }} </span>
                <span> {{ item.title}} </span>
            </router-link>
        </li>
      </ul>
    </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>
