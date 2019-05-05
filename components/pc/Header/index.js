const data = () => {
  return {
    active: null,
    headerSearch: '',
    srcImg: require('~/assets/img/logo.png'),
    search: "",
  };
}

function mounted() {
  methods.load();
}

const methods = {
  next() {
    const active = parseInt(data.active);
    data.active = active < 2 ? active + 1 : 0;
  },
  load() {
    let logo = document.querySelector('.logo');
    let dom = document.querySelectorAll('.activeMv');
    dom.forEach(list => {
      list.onclick = function () {
        dom.forEach(node => {
          node.style.color = "#8b8b8b"
          node.style.borderBottom = "none"
        })
        this.style.color = "#ccc"
        this.style.borderBottom = "2px solid #ab7a18"
      }
    })
    logo.onclick=function() {
      dom.forEach(node => {
        node.style.color = "#8b8b8b"
        node.style.borderBottom = "none"
      })
    }
  }
}

const watch = {
  '$route'(to, from) {
    const toPath = to.name
    const fromPath = from.name
    switch (toPath) {
      case 'index':
        sessionStorage.setItem('toPath', 0);
        break;
      case 'timeline':
        sessionStorage.setItem('toPath', 1);
        break;
      case 'about-me':
        sessionStorage.setItem('toPath', 2);
        break;
    }
    switch (fromPath) {
      case 'index':
        sessionStorage.setItem('fromPath', 0);
        break;
      case 'timeline':
        sessionStorage.setItem('fromPath', 1);
        break;
      case 'about-me':
        sessionStorage.setItem('fromPath', 2);
        break;
    }
    let toIndex = sessionStorage.getItem('toPath')
    let fromIndex = sessionStorage.getItem('fromPath')
    this.transitionName = (toIndex > fromIndex) ? 'forward' : 'backward'
  }
}


export default {
  data: data,
  methods: methods,
  watch: watch,
  mounted: mounted,
  components: {
  },
}
