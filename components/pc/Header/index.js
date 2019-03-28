const data = () => {
  return {
    active: null,
    headerSearch: '',
    srcImg: require('~/assets/img/green.png'),
    search: "",
  };
}
const methods = {
  next() {
    const active = parseInt(this.active);
    this.active = active < 2 ? active + 1 : 0;
  }
}

export default {
  data: data,
  methods: methods
}
