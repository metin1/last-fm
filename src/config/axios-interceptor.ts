import axios from 'axios'
import get from 'lodash/get'

const TIMEOUT = 1 * 60 * 1000
axios.defaults.timeout = TIMEOUT
axios.defaults.baseURL = process.env.SERVER_API_URL

const setupAxiosInterceptors = (
  onUnauthenticated: () => void,
  onOtherErrors: (
    statusCode: number,
    error: string,
    requestEndpoint: string
  ) => void
) => {
  const onRequestSuccess = (config: {
    headers: { accessToken: string; secretKey: string; Authorization: string }
  }) => {
    return config
  }
  const onResponseSuccess = (response: any) => response
  const onResponseError = (err: { status: any; response: { status: any } }) => {
    const status = err.status || (err.response ? err.response.status : 0)
    if (status === 403 || status === 401) {
      onUnauthenticated()
    } else if (status >= 400) {
      onOtherErrors(
        Number(status),
        get(err, 'response.data'),
        get(err, 'config.url')
      )
    }
    return Promise.reject(err)
  }
  axios.interceptors.request.use(onRequestSuccess)
  axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxiosInterceptors
