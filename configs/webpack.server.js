import path from "path"
import nodeExternals from "webpack-node-externals"
import NodemonPlugin from "nodemon-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import configBuild from "./build"
import { isDev } from "../utils/EnvUtils"
import common from "./webpack.common.js"

export default {
  name: "server",
  mode: process.env.NODE_ENV,
  target: "node",
  node: { __dirname: false },
  resolve: common.resolve,
  externals: isDev(process.env) ? [nodeExternals()] : undefined,
  externalsPresets: { node: true },
  module: {
    rules: common.rules(false),
  },
  entry: {
    index: path.resolve(
      __dirname,
      `../src/server${isDev(process.env) ? "/dev.js" : ""}`
    ),
  },
  optimization: {
    minimize: !isDev(process.env),
    removeEmptyChunks: !isDev(process.env),
    removeAvailableModules: !isDev(process.env),
  },
  output: {
    pathinfo: !isDev(process.env),
    publicPath: `/${configBuild.folderStatic}/`,
    filename: "index.js",
    path: path.resolve(__dirname, `../${configBuild.folderBuild}`),
  },
  plugins: [
    ...common.plugins,
    isDev(process.env)
      ? new NodemonPlugin({
          script: `${configBuild.folderBuild}`,
          // What to watch.
          watch: path.resolve(__dirname, `../${configBuild.folderBuild}`),
          // Files to ignore.
          ignore: ["*.js.map"],
          // Extensions to watch.
          ext: "js,json",
          // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
          // Here's 1 second delay:
          delay: "1000",
          // Detailed log.
          verbose: true,
          // Environment variables to pass to the script to be restarted
          env: {
            NODE_ENV: process.env.NODE_ENV,
          },
        })
      : new CopyPlugin({
          patterns: [
            {
              from: `${configBuild.folderPublic}/${configBuild.folderAssets}`,
              to: `${configBuild.folderAssets}`,
            },
          ],
        }),
  ],
}
