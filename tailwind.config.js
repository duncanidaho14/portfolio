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
    content: [
      "./node_modules/flowbite/**/*.js",
      ".index.{html, js}",
      "./src/*.{html,js}"
    ]
}