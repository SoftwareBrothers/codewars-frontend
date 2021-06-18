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
        'purple-heart': '#531AC6',
        'blue-marguerite': '#8175CB',
        'violent-violet': '#170F58',
        'daisy-bush': '#4a17b2',
        prelude: '#D1CDE9',
        'white-lilac': '#F3F1F9',
        'dove-gray': '#717171',
        purple: '#5300c6',
        cinnabar: '#E8494C',
        mischka: '#d7d6da',
        gamboge: '#e2990a',
        emerald: '#009e5f',
        violet: '#0B0727',
        snuff: '#e8e4f3',
        light: '#f3f1f9',
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
            fontFamily: 'CircularStd',
            p: {
              fontSize: '1rem',
              lineHeight: '1.75',
              fontWeight: 400,
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
