
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
const state = {
    testMsg: '原始文本',
    childText:"子组件原始文本"
}
const getters = {
    getMsg (state) {
        return state.testMsg
    },
    getMsg2 (state) {
        return state.childText
    }
}
const mutations = {
    changeTestMsg(state, str){
        state.testMsg = str;
    },
    changeChildText(state, str){
        state.childText = str;
    }
}
const actions = {
    setMsg({commit, state}, str){
        commit('changeTestMsg', str)
    },
    setMsg2({commit, state}, str){
        commit('changeChildText', str)
    }
}
const store = new Vuex.Store({
    state: state,
    getters:getters,
    actions:actions,
    mutations: mutations
})
/* eslint-disable */
export default store;