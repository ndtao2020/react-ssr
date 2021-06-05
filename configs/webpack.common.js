import path from "path"
import WebpackBar from "webpackbar"
import balbelConfig from "../babel.config.js"

export const scriptRegex = /\.(js|jsx)$/
export const styleRegex = /\.(sa|sc|c)ss$/
export const fileRegex =
  /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/

export default {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve("src/"),
    },
  },
  rules: [
    {
      test: scriptRegex,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: balbelConfig,
      },
    },
  ],
  plugins: [new WebpackBar()],
}
