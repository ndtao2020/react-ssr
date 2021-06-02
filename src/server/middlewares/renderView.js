import React from "react"
import { renderToNodeStream } from "react-dom/server"
import { isLogin } from "../middlewares/session"
import { parseHost } from "../../../utils/Server"
import HTML from "../components/HTML"

export default async (
  req,
  res,
  next,
  { css, scripts, hostname, view, state, page, requiredLogin = "public", ...attr }
) => {
  try {
    const logined = isLogin(req)
    requiredLogin === "protected" && logined && res.redirect("/")
    requiredLogin === "private" && !logined && res.redirect("/login")
    // render
    const app = view ? await view : undefined
    renderToNodeStream(
      <HTML
        {...attr}
        hostname={hostname || parseHost(req)}
        url={req.url}
        page={page || "home"}
        css={css}
        scripts={scripts}
        isLogin={logined}
        state={state || (view && view.props)}
        csrf={req.csrfToken()}
      >
        {app ? <app.default /> : undefined}
      </HTML>
    ).pipe(res)
  } catch (err) {
    console.log(err)
    next()
  }
}
