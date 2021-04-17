module.exports = {
  plugins: [
    "postcss-preset-env",
    [require("autoprefixer"), { remove: false }],
    [
      require("cssnano"),
      {
        preset: "default",
      },
    ],
  ],
}
