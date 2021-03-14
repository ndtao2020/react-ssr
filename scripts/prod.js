import "../conf"
import webpack from "webpack"
import { endWebpack } from "../utils/Webpack"
import clientConfig from "../configs/webpack.client.js"
import serverConfig from "../configs/webpack.server.js"

// eslint-disable-next-line no-console
console.log("Compiling...")
// Complie source client
webpack(clientConfig).run((err, stats) =>
  endWebpack(err, stats, () =>
    webpack(serverConfig).run((err, stats) => endWebpack(err, stats))
  )
)
