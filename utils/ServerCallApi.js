import axios from "axios"
import { isDev } from "../utils/EnvUtils"
// REQUEST
export default (host, url, method, data, token) => {
  let configs = { method: method, url: host + url }
  if (data) configs.data = data
  if (token) configs.headers = { Authorization: "Bearer " + token }
  if (isDev(process.env)) {
    // console.info(`[API][${new Date().toISOString()}][${method}] ${host}${url}`);
    // eslint-disable-next-line no-console
    console.info(`=> ${method} ${host}${url}`)
  }
  return axios(configs)
}
