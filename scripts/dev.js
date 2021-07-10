import '../conf'
import webpack from 'webpack'
import serverConfig from '../configs/webpack.server.js'
// compiler
webpack(serverConfig).watch({}, (err, stats) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  stats.hasErrors() && console.error(stats.toString({ colors: true }))
  // eslint-disable-next-line no-console
  stats.hasWarnings() && console.warn(stats.toString({ colors: true }))
  // run server
})
