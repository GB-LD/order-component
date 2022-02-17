module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'redHat': 'Red Hat Display'
      },
      colors:{
        myBlue: {
          50: '#f5f7ff',
          150: '#e0e8ff',
          650: '#7280a7',
          750: '#3829e0',
          850: '#1f2f56'
        }
      },
      backgroundImage: {
        'desktop-bg': "url('/images/pattern-background-desktop.svg')",
        'mobile-bg': "url('/images/pattern-background-mobile.svg')",
        'illu-hero': "url('/images/illustration-hero.svg')"
      },
      backgroundPosition: {    
      'top-4': 'center top -50%'    
      } 
    },
  },
  plugins: [],
}
