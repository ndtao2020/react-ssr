module.exports = {
  plugins: [
    [require("autoprefixer"), { remove: false }],
    [
      require("cssnano"),
      {
        preset: "default",
      },
    ],
  ],
}
