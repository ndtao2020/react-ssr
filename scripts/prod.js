import "../conf"
import webpack from "webpack"
import colors from "colors/safe"
import { endWebpack } from "../utils/Webpack"
import clientConfig from "../configs/webpack.client.js"
import serverConfig from "../configs/webpack.server.js"

// eslint-disable-next-line no-console
console.log(colors.yellow("Compiling..."))
// Complie source client
webpack(clientConfig).run((err, stats) =>
  endWebpack(err, stats, () =>
    webpack(serverConfig).run((err, stats) => endWebpack(err, stats))
  )
)
