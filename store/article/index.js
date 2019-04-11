export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, data) {
      state.list.length = 0;
      state.list.push(data)
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      // console.log(todo)
    },
    get (state, url) {
        this.$router.push({ name: "index" })
    }
  }
