// KEY
const LOADING_ID = `qkxgkyndevubdtojwbzwjlkovqdutfxp`
const LOADING_CLASS = `bG9hZGluZwdc2819cea95b44372a535d1ba3`

/**
 * Mở dialog Loading
 */
export function openLoading() {
  document.getElementById(LOADING_ID).classList.add(LOADING_CLASS)
}

/**
 * Đóng dialog Loading
 */
export function closeLoading() {
  document.getElementById(LOADING_ID).classList.remove(LOADING_CLASS)
}
