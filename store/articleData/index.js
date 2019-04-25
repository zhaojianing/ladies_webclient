export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, data) {
      state.list.length = 0;
      state.list.push(data)
    },
    get (state, url) {
        return state.list;
    }
  }
