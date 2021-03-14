// Routes
import _routes from "./routes"
import _includes from "./includes"

/**
 * @author Nguyễn Đình Tạo
 * @description Hàm đăng xuất tài khoản
 */
export function logoutAccount() {
  setTimeout(() => {
    document.cookie = "_Gsid=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    window.location.href = `/login`
  }, 500)
}

/**
 * @author Nguyễn Đình Tạo
 * @description Kiểm tra đường link cho Routers
 */
export const checkLinkURL = (path) =>
  path === undefined || path === null ? "#" : `${path}`

/**
 * @author Nguyễn Đình Tạo
 * @description Hàm lấy danh sách Routes
 */
export function getAllRoute(menus) {
  return (
    menus && [
      ..._includes,
      ..._routes.filter((route) => {
        const obj = menus.find((menu) => route.path === menu.path)
        if (obj) {
          route.viewName = obj.name
          route.viewIcon = obj.icon
          return true
        }
        return false
      }),
    ]
  )
}
