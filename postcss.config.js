const config = {
  plugins: [
    "postcss-preset-env",
    [require("autoprefixer"), { remove: false }],
    [require("tailwindcss"), { remove: false }],
  ],
}

if (process.env.NODE_ENV === "production") {
  config.plugins.push([
    require("cssnano"),
    {
      preset: "default",
    },
  ])
}

module.exports = config
