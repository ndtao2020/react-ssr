import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import redis from 'redis'
import connectRedis from 'connect-redis'
import session from 'express-session'
import { normalizePort } from '../../utils/Server'
import csp from './csp'
// Init
const app = express()
// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// Helmet
app.use(helmet())
if (process.env.NODE_ENV === 'development') {
  csp.directives.scriptSrc.push("'unsafe-eval'")
  csp.directives.connectSrc.push('http://localhost:*')
}
app.use(helmet.contentSecurityPolicy(csp))
app.use(helmet.referrerPolicy({ policy: 'no-referrer-when-downgrade' }))
// Create a session middleware with the given options
const Store = connectRedis(session)
app.use(
  session({
    store: new Store({
      prefix: 'gxcvcvdfere',
      client: redis.createClient({
        url: process.env.REDIS_URL,
        host: process.env.REDIS_HOST || 'localhost',
        port: normalizePort(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD || 'redis'
      })
    }),
    resave: true,
    saveUninitialized: false,
    key: process.env.KEY_COOKIE || '_sid',
    secret: process.env.COOKIE_SECRET || '@cxc#2cxc5@11%$%',
    cookie: { secure: true, maxAge: 5 * 1000 * 60 * 60 * 24 }
  })
)
// export
export default app
