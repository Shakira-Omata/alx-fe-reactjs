/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src//*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    purge: [
      './src//*.html',
      './src//*.js',
      './src//*.jsx',
      './src//*.ts',
      './src//*.tsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }