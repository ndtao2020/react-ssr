import { lazy } from "react"

const routes = [
  {
    path: "/",
    component: lazy(() => import("../views/base/Dashboard/Dashboard")),
    viewName: "Dashboard",
  },
  {
    path: "/view/base/profile",
    viewName: "Thông tin người sử dụng",
    viewIcon: "fas fa-id-badge",
    component: lazy(() => import("../views/base/Dashboard/Dashboard")),
  },
]

export default routes
