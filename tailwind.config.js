const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          clifford: '#da373d',
        }
      },
    },
    plugins: [
      require("tailwindcss"),
      require('autoprefixer'),
      require('flowbite/plugin'),
      require('@headlessui/tailwindcss'),

      // Or with a custom prefix:
      require('@headlessui/tailwindcss')({ prefix: 'ui' })
    ],
    content: [
      "./node_modules/flowbite/**/*.js",
      ".index.{html, js}",
      "./src/*.{html,js}"
    ]
}