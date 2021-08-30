module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato']
      },
      backgroundImage : {
        featured: "url('../src/images/bg.svg')"
      },
      colors: {
        brand : '#00ADEE',
        hero : '#F4F6F9',
        featuredBg: '#FAFAFA'
      }
    },
    boxShadow: {
      swiper : '13px 0px 113px 113px #ffffff',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
