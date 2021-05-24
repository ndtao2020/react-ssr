import path from "path"
import sass from "sass"
import WebpackBar from "webpackbar"
import ESLintPlugin from "eslint-webpack-plugin"
import configBabel from "../babel.config.js"
import { isDev } from "../utils/EnvUtils"

export const regexScripts = /\.(js|jsx)$/
export const regexStyles = /\.(sa|sc|c)ss$/
export const styleLoaders = [
  {
    loader: "css-loader",
    options: { importLoaders: 1, sourceMap: isDev(process.env) },
  },
  {
    loader: "postcss-loader",
    options: {
      sourceMap: isDev(process.env),
      postcssOptions: {
        config: path.resolve(__dirname, "../postcss.config.js"),
      },
    },
  },
  {
    loader: "sass-loader",
    options: { implementation: sass, sourceMap: isDev(process.env) },
  },
]

export default {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve("src/"),
      "@build": path.resolve("build/"),
      "@configs": path.resolve("configs/"),
      "@utils": path.resolve("utils/"),
    },
  },
  rules: [
    {
      test: regexScripts,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: configBabel,
      },
    },
    {
      test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
  plugins: [new WebpackBar(), new ESLintPlugin({})],
}
