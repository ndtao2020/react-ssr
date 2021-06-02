import express from "express"
import createError from "http-errors"
// build
import pages from "../../../configs/pages"
import configBuild from "../../../configs/build"
// midderware
import html from "../middlewares/html"
import { noCache } from "../middlewares/cache"
import csrfProtection from "../middlewares/csrf"
import renderView from "../middlewares/renderView"
// Routes
import api from "../api"
import error from "./error"
// init
const router = express.Router()
// API
router.use(csrfProtection, api)
// PAGES
pages.forEach(({ url, page, title, view, css, scripts }) =>
  router.get(url, csrfProtection, noCache, html, async (req, res, next) => {
    const entryCss = [],
      entryJS = []
    // css, js
    css && css.forEach((e) => entryCss.push(e))
    scripts && scripts.forEach((e) => entryJS.push(e))
    // devMiddleware
    const { devMiddleware } = res.locals.webpack
    const { assetsByChunkName } = devMiddleware.stats.toJson()
    assetsByChunkName[page].forEach((e) => {
      const path = e.trim()
      if (path.endsWith(".js")) {
        entryJS.push({
          async: false,
          src: `/${configBuild.folderStatic}/${path}`,
        })
      }
    })
    renderView(req, res, next, {
      css: entryCss,
      scripts: entryJS,
      page,
      title,
      view,
    })
  })
)
// catch 404 and forward to error handler
router.use(html, (req, res, next) => next(createError(404)))
// error handler
router.use(error)
// router
export default router
