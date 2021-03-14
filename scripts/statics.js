import "../conf"
import webpack from "webpack"
import clientConfig from "../configs/webpack.client.js"
// compiler
webpack(clientConfig).watch({}, (err, stats) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  stats.hasErrors() && console.error(stats.toString({ colors: true }))
  // eslint-disable-next-line no-console
  stats.hasWarnings() && console.warn(stats.toString({ colors: true }))
})
