import axios from 'axios'
import _ from 'lodash'

const requestInterceptor = (config) => {
  const configMod = {
    ...config,
    headers: {
      ...config.headers,
    },
    url: config.url.replace(/([^:])(\/\/)/g, '$1/'),
  }
  return configMod
}

const responseInterceptor = response => {
  const data = _.get(response, 'data', undefined)
  const code = _.get(response, 'status', undefined)
  return { data, code }
}

const errorResponseHandler = ({ dispatch }) => error => {
  const errorResponse = _.get(error, 'response.data')
  if (_.isEmpty(errorResponse)) {
    return Promise.reject({ Message: error, Code: 400 })
  }
  return Promise.reject(errorResponse)
}

const errorRequestHandler = (error) => Promise.reject(error)

const initService = (config, store) => {
  // Axios globals configuration
  // axios.defaults.baseURL = config.baseURL || ''
  axios.defaults.responseType = 'json'
  axios.defaults.headers['Content-Type'] = 'application/json'
  axios.interceptors.request.use(requestInterceptor, errorRequestHandler)
  axios.interceptors.response.use(responseInterceptor, errorResponseHandler(store))
  axios.defaults.timeout = 60000

}

export default initService

