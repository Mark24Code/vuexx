import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:500
}

const mutations = {
    INC(state){
        state.count++
    },
    DEC(state){
        state.count--
    }
}

const actions = {
    inc({commit}){
        commit('INC')
    },
    dec({commit}){
        commit('DEC')
    }
}

const getters = {
    count(state){
        return state.count
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})