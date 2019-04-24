<template>
    <div class="font_color right-style">
      
        <h3>
            <span> <i class="icon-icon-shouye-zuirewenzhang iconfont"></i> </span>
            <span>最热文章</span>
        </h3>
      <ul>
        <li class="hot-message" v-for="(item,index) in title" :key="item.id">
            <router-link :to="{name:'article-details',query:{id:`${item.id}`,num:`${item.watch_length}`,mdId:`${item.md_id}`,vcmId:`${item.voicemail_id}`}}">
                <span class="newlist-index"> {{ index+1 }} </span>
                <span class="message-text"> {{ item.title}} </span>
            </router-link>
        </li>
      </ul>
    </div>
</template>

<script src="./index.js"></script>

<style lang="stylus" scoped src="./index.styl"></style>
