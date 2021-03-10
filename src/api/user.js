import http from '../request/http'

/**
 * 用户接口
 */
const userApi = {
  /**
   * 登录
   */
  login (params) {
    return http({
      url: '/api/user/login',
      method: 'post',
      params: params
    })
  },
  /**
   * 用户列表
   */
  userList () {
    return http({
      url: '/api/user/list',
      method: 'get'
    })
  },
  /**
   * 用户信息
   */
  userInfo (id, params) {
    return http({
      url: `/api/user/${id}`,
      method: 'get',
      params: params
    })
  }
}

export default userApi
