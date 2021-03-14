import { format } from "date-fns"

/**
 * Lấy giá trị từ thẻ Meta tag theo Key truyền vào
 * @param {String} key meta cần lấy
 */
export function getContentMetaTag(key) {
  return `${document.querySelector(`meta[name="${key}"]`).getAttribute("content")}`
}

/**
 * Thẩm định Email
 * @param {String} email cần thẩm định
 */
export function validateEmail(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
}

/**
 * Định dạng ngày thành dd/MM/yyyy
 * @param {String} value giá trị cần định dạng
 */
export function formatDate(value) {
  return value ? format(new Date(value), "dd/MM/yyyy") : ""
}

/**
 * Định dạng thời gian HH:mm:ss
 * @param {String} value giá trị cần định dạng
 */
export function formatTime(value) {
  return value ? format(new Date(value), "HH:mm:ss") : ""
}

/**
 * Định dạng thời gian dd/MM/yyyy HH:mm:ss
 * @param {String} value giá trị cần định dạng
 */
export function formatDatetime(value) {
  return value ? format(new Date(value), "dd/MM/yyyy HH:mm:ss") : ""
}

/**
 * Định dạng thời gian yyyy-MM-dd'T'HH:mm:ss
 * @param {String} value giá trị cần định dạng
 */
export function formatISODate(value) {
  return value ? format(new Date(value), "yyyy-MM-dd'T'HH:mm:ss") : null
}

/**
 * Định dạng tiền tệ VND
 * @param {Intl} value
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  }).format(value !== undefined ? value : 0)
}

/**
 * Xóa phần tử trong mảng
 * @param {*} arr Mảng được truyền vào
 * @param {*} value giá trị cần xóa
 */
export function arrayRemove(arr, value) {
  return arr.filter((ele) => ele !== value)
}

export const onChangeAlias = (value) => {
  let str = value + ""
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
  str = str.replace(/đ/g, "d")
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  )
  str = str.replace(/ + /g, " ")
  str = str.trim()
  return str
}
