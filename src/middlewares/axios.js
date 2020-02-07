import axios from 'axios'

const getAccessToken = (callback = () => { }) => callback('')

const axiosMiddleware = ({ getState }) => next => (action) => {
  getAccessToken((token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}` || ''
    return next(action)
  })
}

export default axiosMiddleware