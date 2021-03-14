import React from "react"
import { render } from "react-dom"
import App from "@/shared/pages/admin"

render(<App {...window.__DATA__} />, document.getElementById("root"))

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("@/shared/pages/admin", () => {
    const App = require("@/shared/pages/admin").default
    render(<App {...window.__DATA__} />, document.getElementById("root"))
  })
}
