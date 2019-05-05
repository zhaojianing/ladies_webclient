import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import hljs from 'highlight.js' // 引入 markdown代码高亮JS
// import 'highlight.js/styles/googlecode.css' //样式文件
// import 'highlight.js/styles/tomorrow-night-eighties.css' //样式文件
import 'highlight.js/styles/atom-one-dark.css' //样式文件
// import 'highlight.js/styles/nord.css' //样式文件


export default () => {
  Vue.use(Element, { locale })
  Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  })
}
