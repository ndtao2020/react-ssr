import path from 'path'
import express from 'express'
import { normalizePort } from '../../utils/Server'
import app from './app'
import routers from './routes/dev'
// middlewares
import configBuild from '../../configs/build'
import { noCache } from './middlewares/cache'
// webpack
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientConfig from '../../configs/webpack.client'
// compile
const compiler = webpack(clientConfig)
app.use(
  webpackDevMiddleware(compiler, {
    serverSideRender: true,
    publicPath: clientConfig.output.publicPath
  })
)
app.use(webpackHotMiddleware(compiler))
// routes static
app.use(
  `/${configBuild.folderAssets}`,
  noCache,
  express.static(path.resolve(__dirname, `../../${configBuild.folderPublic}/${configBuild.folderAssets}`))
)
app.use(
  `/${configBuild.folderStatic}`,
  noCache,
  express.static(path.resolve(__dirname, `../../${configBuild.folderBuild}/${configBuild.folderStatic}`))
)
// Set Routers
app.use(routers)
// App listening
const port = normalizePort(process.env.PORT || '3000')
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port} !`))
