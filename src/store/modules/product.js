
let initialState = {
    products: []
}

export default {
    namespaced: true,
    name: 'product',
    state: initialState,
    getters: {
        products: state => state.products
    },
    mutations: {
        SET_PRODUCTS: (state, payload) => {
            state.products = payload
        }
    },
    actions: {
        setProducts: ({commit}, payload) => {
            commit('SET_PRODUCTS', payload)
        }
    }
}