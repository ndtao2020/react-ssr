import fetchApi from "../../../utils/ClientCallApi"
import { PUBLIC_API_URL, ALLOWS_API_URL } from "../paths"

/**
 * @author Nguyễn Đình Tạo
 */
class Service {
  constructor(prefix, path) {
    this.prefix = prefix
    this.path = path
  }
  // ================================[REQUEST]================================
  async Get(url) {
    return (await fetchApi("", `${this.prefix}${url}`, "GET")).json()
  }
  async Post(url, data) {
    return (
      await fetchApi("", `${this.prefix}${url}`, "POST", JSON.stringify(data))
    ).json()
  }
  async Put(url, data) {
    return (
      await fetchApi("", `${this.prefix}${url}`, "PUT", JSON.stringify(data))
    ).json()
  }
  async Delete(url) {
    return (await fetchApi("", `${this.prefix}${url}`, "DELETE")).json()
  }
  // ================================[REQUEST]================================
  // =========== [GET] ===========
  GetPUBLIC(url) {
    return this.Get(`${PUBLIC_API_URL}${this.path}${url}`)
  }
  GetALLOWS(url) {
    return this.Get(`${ALLOWS_API_URL}${this.path}${url}`)
  }
  // =========== [POST] ===========
  PostPUBLIC(url, data) {
    return this.Post(`${PUBLIC_API_URL}${this.path}${url}`, data)
  }
  PostALLOWS(url, data) {
    return this.Post(`${ALLOWS_API_URL}${this.path}${url}`, data)
  }
  // =========== [PUT] ===========
  PutALLOWS(url, data) {
    return this.Put(`${ALLOWS_API_URL}${this.path}${url}`, data)
  }
  // =========== [DELETE] ===========
  DeleteALLOWS(url) {
    return this.Delete(`${ALLOWS_API_URL}${this.path}${url}`)
  }
  // ================================[OTHER - REQUEST - BACKEND]================================
  // =========== [SEARCH] ===========
  SearchAll(pre, param) {
    return this.Get(`${pre}${this.path}${param || ""}`)
  }
  // =========== [FIND BY ID] ===========
  // Public
  FindById(pre, id, select) {
    return this.Get(
      `${pre}${this.path}/findById?id=${id}${select ? `&select=${select}` : ""}`
    )
  }
}

export { Service }
