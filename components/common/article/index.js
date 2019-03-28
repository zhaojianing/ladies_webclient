// -- NAME --

const name = 'ArticleList';

// -- DATA --

const data = {
  article: '空'
};

// -- COMPUTED --

const computed = {

};

// -- COMPONENTS -- 

const components = {}

// -- WATCH --

const watch = {

};

// -- METHODS --

const methods = {
  async initLoad(app) {
    let res = await app.$axios.get('article/1');
    data.article = res.data.data;
  }
};

// -- HOOKS --

function mounted() {
  methods.initLoad(this);
}

// == EXPORT ==

export default {
  name: name,

  data: function () {
    return data;
  },

  components: components,

  computed: computed,

  watch: watch,

  methods: methods,

  mounted: mounted,

};
