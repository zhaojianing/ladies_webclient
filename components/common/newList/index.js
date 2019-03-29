// -- NAME --

const name = 'newList';

// -- DATA --

const data = {
  title: '',
  index: 1
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
    async loadTitle (app) {
        let res = await app.$axios.get("article/1");
        data.title = res.data.data;
    }
};

// -- HOOKS --

function mounted() {
  methods.loadTitle(this);
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
