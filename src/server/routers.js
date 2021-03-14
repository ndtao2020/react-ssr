import createError from "http-errors"
// middlewares
import html from "./middlewares/html"
import csrfProtection from "./middlewares/csrf"
// Routes
import api from "./api"
import page from "./routes"
import error from "./routes/error"
// Routes
page.use(csrfProtection, api)
page.get("/robots.txt", (req, res) => {
  res.type("text/plain")
  res.send(`User-agent: *\nDisallow: /profile/*`)
})
// catch 404 and forward to error handler
page.use(html, (req, res, next) => next(createError(404)))
// error handler
page.use(error)
// Exports
export default page
