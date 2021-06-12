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
    const use = []
    if (isClient) {
      use.push(MiniCssExtractPlugin.loader)
    }
    use.push({
      loader: "css-loader",
      options: { importLoaders: 1, sourceMap: isDev(process.env) },
    })
    if (isClient) {
      use.push({
        loader: "postcss-loader",
        options: {
          sourceMap: isDev(process.env),
          postcssOptions,
        },
      })
    }
    use.push({
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
      {
        test: scriptRegex,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use,
      },
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
