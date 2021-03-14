import path from "path"
import sass from "sass"
import colors from "colors/safe"
import { ProgressPlugin, EnvironmentPlugin } from "webpack"
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
    new ESLintPlugin({}),
    new EnvironmentPlugin({
      PUBLIC_URL: process.env.PUBLIC_URL,
      APP_TITLE: process.env.APP_TITLE,
      APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    }),
    new ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
      handler(percentage, message, ...args) {
        // e.g. Output each progress message directly to the console:
        if (percentage === 0) {
          // eslint-disable-next-line no-console
          console.info(colors.brightYellow("Compiling..."))
          return
        }
        if (percentage < 1 && message !== "cache") {
          // eslint-disable-next-line no-console
          console.info(
            colors.brightYellow(`[${Math.ceil(percentage * 100)}%]`),
            colors.brightCyan(`${message}`),
            ...args
          )
          return
        }
        if (percentage === 1) {
          // eslint-disable-next-line no-console
          console.info(colors.brightGreen("[100%] compiled successfully"))
        }
      },
    }),
  ],
}
