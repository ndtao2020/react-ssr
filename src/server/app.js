import express from "express"
import cookieParser from "cookie-parser"
// Init
const app = express()
// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// export
export default app
