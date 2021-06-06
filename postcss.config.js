module.exports = {
  plugins: [
    "postcss-preset-env",
    [require("autoprefixer"), { remove: false }],
    [require("tailwindcss"), { remove: false }],
    [
      require("cssnano"),
      {
        preset: "default",
      },
    ],
  ],
}
