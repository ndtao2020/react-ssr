module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "css-modules-transform",
      {
        camelCase: true,
        extensions: [".css", ".sass", ".scss"],
      },
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
  ],
}
