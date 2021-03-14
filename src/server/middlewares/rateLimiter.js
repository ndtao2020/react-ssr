import mongodb from "mongodb"
import { RateLimiterMongo } from "rate-limiter-flexible"
import errorRouter from "../routes/error"

const MongoClient = mongodb.MongoClient

const mongoConn = MongoClient.connect(process.env.MONGO, {
  useUnifiedTopology: true,
})

const opts = {
  storeClient: mongoConn,
  dbName: process.env.MONGO_DB_NAME,
  tableName: `${process.env.MONGO_COLLECTION_RATE_LIMIT}client`,
  points: 100, // Number of points
  duration: 1, // Per second(s)
}

const rateLimiterMongo = new RateLimiterMongo(opts)

export default (req, res, next) =>
  rateLimiterMongo
    .consume(req.ip)
    .then(() => next())
    .catch((err) => errorRouter(err, req, res, next))
