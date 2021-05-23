import path from "path"
import http from "http"
import express from "express"
import helmet from "helmet"
import redis from "redis"
import connectRedis from "connect-redis"
import session from "express-session"
import compression from "compression"
import app from "./app"
import routers from "./routers"
import config from "../../configs/build"
// middlewares
import csp from "./csp"
import { setTimePublic } from "./middlewares/cache"
import { normalizePort, onError } from "../../utils/Server"
// Helmet
app.use(helmet())
app.use(helmet.contentSecurityPolicy(csp))
app.use(helmet.referrerPolicy({ policy: "no-referrer-when-downgrade" }))
// trust first proxy
app.set("trust proxy", 1)
// Create a session middleware with the given options
const Store = connectRedis(session)
app.use(
  session({
    store: new Store({
      prefix: "gxcvcvdfere",
      client: redis.createClient({
        url: process.env.REDIS_URL,
        host: process.env.REDIS_HOST || "localhost",
        port: normalizePort(process.env.REDIS_PORT || "6379"),
        password: process.env.REDIS_PASSWORD || "redis",
      }),
    }),
    resave: true,
    saveUninitialized: false,
    key: process.env.KEY_COOKIE || "_sid",
    secret: process.env.COOKIE_SECRET || "@cxc#2cxc5@11%$%",
    cookie: { secure: true, maxAge: 5 * 1000 * 60 * 60 * 24 },
  })
)
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
