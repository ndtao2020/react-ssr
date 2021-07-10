import express from 'express'
import createError from 'http-errors'
// build
import pages from '../../../configs/pages'
import configBuild from '../../../configs/build'
// midderware
import html from '../middlewares/html'
import csrfProtection from '../middlewares/csrf'
import renderView from '../middlewares/renderView'
// Routes
import api from '../api'
import error from './error'
// init
const router = express.Router()
// API
router.use(csrfProtection, api)
router.get('/robots.txt', (req, res) => {
  res.type('text/plain')
  res.send(`User-agent: *\nDisallow: /profile/*`)
})
// PAGES
pages.forEach(({ url, page, title, view, css, scripts }) =>
  router.get(url, csrfProtection, html, async (req, res, next) => {
    const entryCss = [],
      entryJS = []
    // css, js
    css && css.forEach((e) => entryCss.push(e))
    scripts && scripts.forEach((e) => entryJS.push(e))
    // devMiddleware
    const manifest = await import('../../../build/statics/manifest.json')
    manifest['css'][page].forEach((e) => entryCss.push(`/${configBuild.folderStatic}/${e}`))
    manifest['js'][page].forEach((e) =>
      entryJS.push({
        async: false,
        src: `/${configBuild.folderStatic}/${e}`
      })
    )
    renderView(req, res, next, {
      css: entryCss,
      scripts: entryJS,
      page,
      title,
      view
    })
  })
)
// catch 404 and forward to error handler
router.use(html, (req, res, next) => next(createError(404)))
// error handler
router.use(error)
// router
export default router
