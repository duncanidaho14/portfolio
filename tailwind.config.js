const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          clifford: '#da373d',
          whiteBackground: '#FFFFFF',
          darkBackground: '#3748c6',
          roseFoncer: '#CA3C66',
          roseClaire: '#DB6A8F',
          rosePale: '#E8AABE',
          bleuPale: '#A7E0E0',
          bleuClaire: '#4AA3A2',
          orange: '#DB5427',
          rouge: '#DB3627',
          violet: '#DB27CC',
          marron: '#DB7527',
          rose: '#DB7527',
          autreRose: '#ED779C'
        },
        backgroundImage: {
          'dev-diplome': "url('./assets/images/diplome.svg')",
          'diplome': "url('/assets/images/diplomedeux.svg')",
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
      "./src/*.{html,js}",
      "./assets/*.{html,js}"
    ]
}