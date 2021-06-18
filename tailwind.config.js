module.exports = {
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    boxShadow: {
      DEFAULT: '0 4px 16px 0 rgba(209, 205, 233, 0.8)',
    },
    screens: {
      '2xl': '1536px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xl: '1280px',
    },
    extend: {
      colors: {
        dark: '#171717',
        'light-dark': '#1e1e1e',
        'dark-orange': '#b1361e',
        'cw-red': '#1e1e1e',
        'cw-gray': '#818181'
      },
      width: {
        auth: '592px',
        sidebar: '352px',
      },
      minWidth: {
        4: '1rem',
        22: '5.5rem',
      },
      minHeight: {
        4: '1rem',
        20: '5rem',
        22: '5.5rem',
      },
      spacing: {
        15: '3.75rem',
        22: '5.5rem',
        26: '6.5rem',
        '45%': '45%',
        '9/50': '18%',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        xxs: '0.625rem',
        '4.5xl': '2.75rem',
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            fontFamily: 'TTNorms',
            color: 'white',
            p: {
              fontSize: '1rem',
              lineHeight: '1.75',
              fontWeight: 400,
              color: 'white',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '1.33',
              marginTop: '2.75rem',
              marginBottom: '2rem',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
