import React, { lazy } from "react"
import nprogress from "nprogress"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import store from "./redux/store"
import RenderSuspense from "@/shared/components/RenderSuspense"
import "@/shared/assets/styles/admin/style.scss"

nprogress.configure({ showSpinner: false, easing: "ease", speed: 600 })

const Layout = lazy(() => import("./layout"))

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/admin">
        <RenderSuspense>
          <Switch>
            <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
          </Switch>
        </RenderSuspense>
      </BrowserRouter>
      <div
        id="qkxgkyndevubdtojwbzwjlkovqdutfxp"
        className="bG9hZGluZw4401c506776944b0"
      >
        <div className="bG9hZGluZwdc1575b88e7648a0b8605302c33735d3">
          <div className="pt-1 text-center">
            <div className="spinner-border text-danger" />
          </div>
        </div>
      </div>
    </Provider>
  )
}
