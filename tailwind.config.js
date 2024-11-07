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
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
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