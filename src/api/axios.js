import axios from 'axios'

// 请求超时时间
axios.defaults.timeout = 500

// 请求URL前缀(实用绝对URL无效)
axios.defaults.baseURL = '/api'

/**
 * [description]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
let get = (url, params) => {
  // let {url, params} = option

  return new Promise((resolve, reject) => {
    axios.get(url, params).then((response) => {
      resolve(response)
    })
  })
}

/**
 * [description]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
let post = (url, params) => {
  // let {url, params} = option

  return new Promise((resolve, reject) => {
    axios.post(url, params).then((response) => {
      resolve(response)
    })
  })
}

/**
 * [description]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
let upload = (option) => {
  let {url, params, onUploadProgress} = option

  // create form data
  let formData = newForm(params)

  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (event) {
        if (onUploadProgress) {
          onUploadProgress(event)
        }
      }
    }).then((response) => {
      resolve(response)
    })
  })
}

/**
 * [description]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
let download = (option) => {
  // todo
}

/**
 * 创建一个form表单数据, 多层嵌套未经测试。
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
let newForm = (params) => {
  let formData = new FormData()

  for (let _key in params) {
    formData.append(_key, params[_key])
  }

  return formData
}

/**
 * 响应拦截器
 * @param  {[type]} (response) [description]
 * @param  {[type]} (error     [description]
 * @return {[type]}            [description]
 */
axios.interceptors.response.use((response) => {
  // todo
  return response
}, (error) => {
  return alert(error.message)
  // return Promise.reject(error)
})

// expor
export default {
  get,
  post,
  upload,
  download
}
