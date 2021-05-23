import React from "react"
import { render } from "react-dom"
import App from "@/shared/pages/admin"

const id = document.getElementById("root")

render(<App {...window.__DATA__} />, id)

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("@/shared/pages/admin", () =>
    import("@/shared/pages/admin").then((e) =>
      render(<e.default {...window.__DATA__} />, id)
    )
  )
}
