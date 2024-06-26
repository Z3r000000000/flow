import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    saveProduct({ commit }, product) {
      fetch('https://8962a1eb5edc700e.mokky.dev/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(response => {
        if (response.ok) {
          console.log('Товар сохранен успешно')
          commit('addProduct', product)
        } else {
          console.error('Ошибка при сохранении товара')
        }
      })
      .catch(error => {
        console.error('Ошибка при сохранении товара:', error)
      })
    }
  }
})