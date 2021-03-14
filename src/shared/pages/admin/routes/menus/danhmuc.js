import { lazy } from "react"

const routes = [
  {
    path: "/view/danh-muc/danh-muc-dong-ca",
    component: lazy(() => import("../../views/base/Dashboard/Dashboard")),
  },
]

export default routes
