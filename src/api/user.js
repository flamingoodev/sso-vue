/**
 * user模块接口列表
 */

import domain from './domain' // 导入接口域名列表
import axios from '../request/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const user = {
  // 用户列表
  userList () {
    return axios.get(`${domain.sso}/user/list`)
  },
  // 用户信息
  userInfo (id, params) {
    return axios.get(`${domain.sso}/user/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`${domain.sso}/token`, qs.stringify(params))
  }
  // 其他接口…
}

export default user
