import renderView from "../middlewares/renderView"
import { isProd } from "../../../utils/EnvUtils"

export default (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = isProd(process.env) ? {} : err
  if (err.status === 404) {
    renderView(req, res, next, {
      page: "404",
      title: `404`,
      description: `404`,
    })
    return
  }
  renderView(req, res, next, { page: "500", title: `500`, description: `500` })
}
