import Axios from 'axios'

const defaultMutationHeaders = {
  'Content-Type': 'application/json',
}

const apiUrl = process.env.REACT_APP_API

function createAxiosAdapter() {
  const axios = Axios.create({
    baseURL: window.location.hostname === 'локалхост' ? '/' : apiUrl,
  })

  axios.interceptors.response.use(
    response => {
      const header = response.headers['content-disposition']
      if (header) {
        return { data: response.data, header }
      }
      return response.data
    },
    err => {
      if (!err || !err.response) {
        return err
      }
      const error = err.response
      return Promise.reject(error.data)
    }
  )

  return {
    delete(url, body, headers = defaultMutationHeaders, config) {
      return axios.delete(url, { data: body }, { headers, ...config })
    },
    get(url, params, config) {
      return axios.get(url, { params, ...config })
    },
    patch(url, body, headers = defaultMutationHeaders, config) {
      return axios.patch(url, body, { headers, ...config })
    },
    post(url, body, headers = defaultMutationHeaders, config) {
      return axios.post(url, body, { headers, ...config })
    },
    put(url, body, headers = defaultMutationHeaders, config) {
      return axios.put(url, body, { headers, ...config })
    },
  }
}

export default createAxiosAdapter()
