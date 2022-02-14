module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      colors: {
        'mycolor1': '#05386B',
        'mycolor2': '#8EE4AF',
        'mycolor3': '#EDF5E1'
      }, 
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
