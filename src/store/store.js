/**
 * vuex状态管理仓库
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 需要管理的状态值
 */
const state = {
  changeNetwork: false,
  token: '',
  count: 0,
  changeableNum: 0
}

/**
 * 获取状态的最新值（实时监听）
 */
const getters = {
  getCount: (state) => {
    return state.count
  },
  getChangeableNum: (state) => {
    return state.changeableNum
  }
}

/**
 * 利用vue双向驱动更新状态
 * 1、可以传递多个参数(变量或对象)
 * 2、在大多数情况下，载荷（payload）应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
 */
const mutations = {
  updateCount: (state) => {
    state.count = state
  },
  updateChangeableNum: (state, payload) => {
    state.changableNum += payload.num
  }
}

/**
 * 异步触发mutations里面的方法
 */
const actions = {
  getCount: (context) => { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit(0)
  },
  getNewNum: (context, num) => { // 同上，num为要变化的形参
    context.commit(0, num)
  }
}
/**
 * 构建状态管理仓库对象
 */
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
