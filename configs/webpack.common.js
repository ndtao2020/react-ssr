import path from "path"
import WebpackBar from "webpackbar"
import balbelConfig from "../babel.config.js"

export const regexScripts = /\.(js|jsx)$/
export const regexStyles = /\.(sa|sc|c)ss$/

export default {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve("src/"),
    },
  },
  rules: [
    {
      test: regexScripts,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: balbelConfig,
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
  plugins: [new WebpackBar()],
}
