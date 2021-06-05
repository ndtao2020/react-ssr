import path from "path"
import sass from "sass"
import webpack from "webpack"
import ESLintPlugin from "eslint-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { WebpackManifestPlugin } from "webpack-manifest-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import pages from "./pages"
import configBuild from "./build"
import { isDev } from "../utils/EnvUtils"
import { getFileExtension } from "../utils/IO"
import postcssOptions from "../postcss.config.js"
import common, { scriptRegex, styleRegex, fileRegex } from "./webpack.common.js"

export default {
  name: "client",
  mode: process.env.NODE_ENV,
  target: "web",
  resolve: common.resolve,
  stats: isDev(process.env) ? "errors-warnings" : undefined,
  module: {
    rules: [
      ...common.rules,
      {
        test: scriptRegex,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: styleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: isDev(process.env) },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDev(process.env),
              postcssOptions: { postcssOptions },
            },
          },
          {
            loader: "sass-loader",
            options: { implementation: sass, sourceMap: isDev(process.env) },
          },
        ],
      },
      {
        test: fileRegex,
        loader: "file-loader",
        options: {
          name: `${isDev(process.env) ? "[path][name]" : "[contenthash]"}.[ext]`,
        },
      },
    ],
  },
  entry: pages.reduce(
    (result, { page }) => {
      const p = path.resolve(__dirname, `../src/client/${page}`)
      result[page] = isDev(process.env) ? [p, `webpack-hot-middleware/client`] : p
      return result
    },
    {
      404: path.resolve(__dirname, `../src/client/error/404.jsx`),
      500: path.resolve(__dirname, `../src/client/error/500.jsx`),
    }
  ),
  optimization: {
    minimize: !isDev(process.env),
    splitChunks: isDev(process.env) ? false : { chunks: "all" },
    runtimeChunk: isDev(process.env)
      ? undefined
      : { name: ({ name }) => `r.${name}` },
    removeEmptyChunks: !isDev(process.env),
    removeAvailableModules: !isDev(process.env),
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
          new CssMinimizerPlugin(),
        ],
  },
  output: {
    pathinfo: !isDev(process.env),
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
    new ESLintPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: !isDev(process.env),
      analyzerMode: isDev(process.env) ? "server" : "static",
    }),
    new MiniCssExtractPlugin({
      filename: isDev(process.env) ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: isDev(process.env) ? "[id].css" : "[id].[chunkhash].css",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: `/${configBuild.folderStatic}/`,
      generate: (seed, files, entrypoints) => {
        let entrypointsCSS = {},
          entrypointsJS = {}
        // loops
        for (var key in entrypoints) {
          const css = [],
            js = []
          entrypoints[key].forEach((entry) => {
            if (getFileExtension(entry) === "css") {
              css.push(entry)
            }
            if (getFileExtension(entry) === "js") {
              js.push(entry)
            }
          })
          entrypointsCSS[key] = [...css]
          entrypointsJS[key] = [...js]
        }
        return { css: { ...entrypointsCSS }, js: { ...entrypointsJS } }
      },
    }),
  ],
}
