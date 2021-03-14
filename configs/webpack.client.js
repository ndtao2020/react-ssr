import path from "path"
import webpack from "webpack"
import TerserPlugin from "terser-webpack-plugin"
import { WebpackManifestPlugin } from "webpack-manifest-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import pages from "./pages"
import configBuild from "./build"
import { isDev } from "../utils/EnvUtils"
import { getFileExtension } from "../utils/IO"
import common, { regexScripts, regexStyles, styleLoaders } from "./webpack.common.js"

export default {
  name: "client",
  mode: process.env.NODE_ENV,
  target: "web",
  resolve: common.resolve,
  module: {
    rules: [
      ...common.rules,
      {
        test: regexScripts,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: regexStyles,
        use: ["style-loader", ...styleLoaders],
      },
    ],
  },
  entry: pages.reduce(
    (result, { page }) => {
      const p = path.resolve(__dirname, `../src/client/${page}`)
      result[page] = isDev(process.env) ? ["webpack-hot-middleware/client", p] : p
      return result
    },
    {
      404: path.resolve(__dirname, `../src/client/error/404.jsx`),
      500: path.resolve(__dirname, `../src/client/error/500.jsx`),
    }
  ),
  optimization: isDev(process.env)
    ? {}
    : {
        splitChunks: { chunks: "all" },
        runtimeChunk: { name: ({ name }) => `r~${name}` },
        minimizer: isDev(process.env)
          ? []
          : [
              new TerserPlugin({
                terserOptions: {
                  output: {
                    comments: false,
                  },
                  compress: true,
                },
              }),
            ],
      },
  output: {
    publicPath: `/${configBuild.folderStatic}/`,
    filename: isDev(process.env) ? `[name].js` : `[name].[contenthash].js`,
    chunkFilename: isDev(process.env) ? "[id].js" : "[id].[chunkhash].js",
    path: path.resolve(
      __dirname,
      `../${configBuild.folderBuild}/${configBuild.folderStatic}`
    ),
  },
  devtool: isDev(process.env) ? "eval-source-map" : false,
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: isDev(process.env) ? undefined : "static",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: `/${configBuild.folderStatic}/`,
      generate: isDev(process.env)
        ? undefined
        : (seed, files, entrypoints) => {
            // Kiểm tra các endpoint
            let entrypointsJS = {}
            // loops
            for (var key in entrypoints) {
              const js = []
              entrypoints[key].forEach((entry) => {
                if (getFileExtension(entry) === "js") {
                  js.push(entry)
                }
              })
              entrypointsJS[key] = [...js]
            }
            return entrypointsJS
          },
    }),
  ],
}
