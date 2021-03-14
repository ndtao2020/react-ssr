/**
 * Lấy giá trị từ thẻ Meta tag theo Key truyền vào
 * @param {String} key meta cần lấy
 */
export function getCSRF() {
  return `${document
    .querySelector(`meta[name="_csrc9eebe"]`)
    .getAttribute("content")}`
}

/**
 * Gọi API lên Server
 * @param {String} prefix tiền tố cần gắn phía trước
 * @param {String} url cần gọi
 * @param {String} method phương thức cần yêu cầu
 * @param {Object} body dữ liệu cần truyền lến nếu có
 */
export default (prefix, url, method, body) => {
  let configs = {
    method,
    credentials: "same-origin", // <-- includes cookies in the request
    headers: {
      Accept: "application/json",
    },
  }
  if (method !== "GET") {
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      configs.headers["Content-Type"] = "application/json"
      if (body) {
        configs["body"] = body
      }
    }
    configs.headers["CSRF-Token"] = getCSRF()
  }
  return fetch(`${prefix}${url}`, configs)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
    .catch((error) => Promise.reject(error))
}
