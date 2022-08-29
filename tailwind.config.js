/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ], theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
  daisyui: {
    darkMode: false,
    themes: [
      {
        songaTheme: {
          "primary": "#96146A",
          "secondary": "#F39200",
          "accent": "#170D17",
          "neutral": "#FFFFFF",
          "base-100": "#F2EEF1",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  }
}
