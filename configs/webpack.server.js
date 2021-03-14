import path from "path"
import nodeExternals from "webpack-node-externals"
import CopyPlugin from "copy-webpack-plugin"
import configBuild from "./build"
import { isDev } from "../utils/EnvUtils"
import common, { regexStyles, styleLoaders } from "./webpack.common.js"

export default {
  name: "server",
  mode: process.env.NODE_ENV,
  target: "node",
  node: { __dirname: false },
  resolve: common.resolve,
  externals: isDev(process.env) ? [nodeExternals()] : undefined,
  module: {
    rules: [
      ...common.rules,
      {
        test: regexStyles,
        use: styleLoaders,
      },
    ],
  },
  entry: {
    index: path.resolve(
      __dirname,
      `../src/server${isDev(process.env) ? "/dev.js" : ""}`
    ),
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, `../${configBuild.folderBuild}`),
  },
  plugins: [
    ...common.plugins,
    new CopyPlugin({
      patterns: [
        {
          from: `${configBuild.folderPublic}/${configBuild.folderAssets}`,
          to: `${configBuild.folderAssets}`,
        },
      ],
    }),
  ],
}
