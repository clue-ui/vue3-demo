import axios from './axios'

/**
 * 获取一条消息
 * @param  {[type]} form [description]
 * @return {[type]}      [description]
 */
let hello = (id) => {
  return axios.post('/example/hello/' + id)
}

export default {
  hello
}
