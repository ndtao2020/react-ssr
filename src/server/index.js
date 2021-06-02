import path from "path"
import http from "http"
import express from "express"
import compression from "compression"
import app from "./app"
import routers from "./routes"
import config from "../../configs/build"
// middlewares
import { setTimePublic } from "./middlewares/cache"
import { normalizePort, onError } from "../../utils/Server"
// trust first proxy
app.set("trust proxy", 1)
// Compression Gzip
app.use(compression())
// routes static
app.use(
  `/${config.folderAssets}`,
  (q, s, n) => setTimePublic(s, n, 86400),
  express.static(path.resolve(__dirname, `./${config.folderAssets}`))
)
app.use(
  `/${config.folderStatic}`,
  (q, s, n) => setTimePublic(s, n, 10800),
  express.static(path.resolve(__dirname, `./${config.folderStatic}`))
)
// Set Routers
app.use(routers)
/** Set port*/
const port = normalizePort(process.env.PORT || "3000")
http
  .createServer(app.set("port", port))
  .on("error", (err) => onError(err, port))
  // eslint-disable-next-line no-console
  .on("listening", () => console.log("Listening on " + port))
  .listen(port)
