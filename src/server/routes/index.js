import express from "express"
import pages from "../../../configs/pages"
// midderware
import html from "../middlewares/html"
import { noCache } from "../middlewares/cache"
import csrfProtection from "../middlewares/csrf"
import renderView from "../middlewares/renderView"
// init
const router = express.Router()
/* GET home page. */
router.get("/", csrfProtection, noCache, html, (req, res) => res.redirect("/admin"))
// PAGES
pages.forEach(({ url, page, title }) =>
  router.get(url, csrfProtection, noCache, html, (req, res, next) =>
    renderView(req, res, next, { page, title })
  )
)
// router
export default router
