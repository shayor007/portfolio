module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'car': "url('./assets/images/emma.jpg')"
      }),
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
