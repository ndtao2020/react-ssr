import path from "path"
import sass from "sass"
import WebpackBar from "webpackbar"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { isDev } from "../utils/EnvUtils"
import balbelConfig from "../babel.config.js"
import postcssOptions from "../postcss.config.js"

const scriptRegex = /\.(js|jsx)$/

export default {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve("src/"),
    },
  },
  rules: (isClient) => {
    const config = [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [],
      },
    ]
    config.push({
      test: scriptRegex,
      exclude: /node_modules/,
      loader: "eslint-loader",
    })
    if (isClient) {
      config[0].use.push(MiniCssExtractPlugin.loader)
    }
    config[0].use.push({
      loader: "css-loader",
      options: { importLoaders: 1, sourceMap: isDev(process.env) },
    })
    if (isClient) {
      config[0].use.push({
        loader: "postcss-loader",
        options: {
          sourceMap: isDev(process.env),
          postcssOptions: { postcssOptions },
        },
      })
    }
    config[0].use.push({
      loader: "sass-loader",
      options: { implementation: sass, sourceMap: isDev(process.env) },
    })
    return [
      {
        test: scriptRegex,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: balbelConfig,
        },
      },
      ...config,
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          emitFile: isClient,
          name: `${isDev(process.env) ? "[path][name]" : "[contenthash]"}.[ext]`,
        },
      },
    ]
  },
  plugins: [new WebpackBar()],
}
