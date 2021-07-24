module.exports = {
  plugins: [
    [require('autoprefixer'), { remove: false }],
    [require('tailwindcss'), { remove: false }],
    [
      require('cssnano'),
      {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    ]
  ]
}
