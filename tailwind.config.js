/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    backgroundPosition: {
      'bottom-center': 'bottom center',
      'center-center': 'center center'
    },
    fontSize: {},
    extend: {
      backgroundImage: {
        'background': "url('/images/header-bg-desktop.png')",
        'style-background': "url(/images/bg-1.png)",
        'bg-circle': "url(/images/circle.png)",
      },
    },
  },
  plugins: [],
}

