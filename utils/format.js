import { format } from "date-fns"

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
 * @param currencyCode
 */
export function formatCurrency(value, currencyCode = "VND") {
  return new Intl.NumberFormat({
    style: "currency",
    currency: currencyCode,
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
