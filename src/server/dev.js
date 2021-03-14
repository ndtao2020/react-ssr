import "../../conf"
import path from "path"
import express from "express"
import helmet from "helmet"
import colors from "colors/safe"
import redis from "redis"
import connectRedis from "connect-redis"
import session from "express-session"
import { normalizePort } from "../../utils/Server"
import app from "./app"
import routers from "./routers"
// middlewares
import csp from "./csp"
import configBuild from "../../configs/build"
import { noCache } from "./middlewares/cache"
// webpack
import webpack from "webpack"
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import clientConfig from "../../configs/webpack.client"
// compile
const compiler = webpack(clientConfig)
app.use(
  webpackDevMiddleware(compiler, {
    stats: "errors-warnings",
    serverSideRender: true,
    publicPath: clientConfig.output.publicPath,
  })
)
app.use(webpackHotMiddleware(compiler))
// Helmet
app.use(helmet())
csp.directives.scriptSrc.push("'unsafe-eval'")
app.use(helmet.contentSecurityPolicy(csp))
app.use(helmet.referrerPolicy({ policy: "no-referrer-when-downgrade" }))
// Create a session middleware with the given options
const Store = connectRedis(session)
app.use(
  session({
    store: new Store({
      prefix: "gxcvcvdfere",
      client: redis.createClient({
        host: process.env.REDIS_HOST || "localhost",
        port: normalizePort(process.env.REDIS_PORT || "6379"),
        password: process.env.REDIS_PASSWORD || "redis",
      }),
    }),
    resave: true,
    saveUninitialized: false,
    key: process.env.COOKIE_KEY || "_sid",
    secret: process.env.COOKIE_SECRET || "123",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)
app.use(
  `/${configBuild.folderAssets}`,
  noCache,
  express.static(
    path.resolve(
      __dirname,
      `../../${configBuild.folderPublic}/${configBuild.folderAssets}`
    )
  )
)
app.use(
  `/${configBuild.folderStatic}`,
  noCache,
  express.static(
    path.resolve(
      __dirname,
      `../../${configBuild.folderBuild}/${configBuild.folderStatic}`
    )
  )
)
// Set Routers
app.use(routers)
// App listening
const port = normalizePort(process.env.PORT || "3000")
// eslint-disable-next-line no-console
app.listen(port, () => console.log(colors.green(`App listening on port ${port} !`)))
