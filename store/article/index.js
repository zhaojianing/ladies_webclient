export const state = () => ({
    list: [{
        done: 'hello',
        text: 'text',
        key: 1
    }]
  })
  
  export const mutations = {
    add (state, text) {
      state.list.push({
        text: text,
        done: false,
        key:2
      })
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    },
    get (state, url) {
        this.$router.push({ name: "index" })
    }
  }
