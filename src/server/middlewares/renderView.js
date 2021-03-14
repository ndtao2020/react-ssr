import React from "react"
import { renderToNodeStream } from "react-dom/server"
import { isLogin } from "../middlewares/session"
import { parseHost } from "../../../utils/Server"
import configBuild from "../../../configs/build"
import HTML from "../components/HTML"

export default async (
  req,
  res,
  next,
  { scripts, hostname, view, state, page, requiredLogin = "public", ...attr }
) => {
  try {
    const logined = isLogin(req)
    requiredLogin === "protected" && logined && res.redirect("/")
    requiredLogin === "private" && !logined && res.redirect("/login")
    //
    const entryJS = []
    // add
    scripts && scripts.forEach((e) => entryJS.push(e))
    // development
    if (process.env.NODE_ENV === "development") {
      const { devMiddleware } = res.locals.webpack
      const jsonWebpackStats = devMiddleware.stats.toJson()
      const { assetsByChunkName } = jsonWebpackStats
      assetsByChunkName[page].forEach((e) => {
        const path = e.trim()
        if (path.endsWith(".js")) {
          entryJS.push({
            async: false,
            src: `/${configBuild.folderStatic}/${path}`,
          })
        }
      })
    } else {
      const manifest = await import("../../../build/statics/manifest.json")
      manifest[page].forEach((e) =>
        entryJS.push({
          async: false,
          src: `/${configBuild.folderStatic}/${e}`,
        })
      )
    }
    // render
    renderToNodeStream(
      <HTML
        {...attr}
        hostname={hostname || parseHost(req)}
        url={req.url}
        page={page || "home"}
        scripts={entryJS}
        isLogin={logined}
        state={state || (view && view.props)}
        csrf={req.csrfToken()}
      >
        {view}
      </HTML>
    ).pipe(res)
  } catch (err) {
    console.log(err)
    next()
  }
}
