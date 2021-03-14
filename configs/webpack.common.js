import path from "path"
import sass from "sass"
import webpack from "webpack"
import WebpackBar from "webpackbar"
import ESLintPlugin from "eslint-webpack-plugin"
import configBabel from "../babel.config.js"

export const regexScripts = /\.(js|jsx)$/
export const regexStyles = /\.(sa|sc|c)ss$/
export const styleLoaders = [
  { loader: "css-loader", options: { sourceMap: false } },
  {
    loader: "sass-loader",
    options: { implementation: sass, sourceMap: false },
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
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ],
  plugins: [
    new WebpackBar(),
    new ESLintPlugin({}),
    new webpack.EnvironmentPlugin({
      PUBLIC_URL: process.env.PUBLIC_URL,
      APP_TITLE: process.env.APP_TITLE,
      APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    }),
  ],
}
