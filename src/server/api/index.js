import express from "express"
import HttpsProxyAgent from "https-proxy-agent"
import { createProxyMiddleware } from "http-proxy-middleware"

// HTTP/HTTPS proxy to connect to
var proxyServer = process.env.http_proxy || "http://10.10.10.10:8080"
console.log("Using proxy server %j", proxyServer)

const apiProxyMiddleware = createProxyMiddleware({
  // For development
  // secure: false
  target: "https://mcare-dev.tma.com.vn/api",
  changeOrigin: true,
  toProxy: true,
  // create an instance of the `HttpsProxyAgent` class with the proxy server information
  agent: new HttpsProxyAgent(proxyServer),
})
// Init
const router = express.Router()
// [APIs]
router.use("/api", apiProxyMiddleware)
// export
export default router
