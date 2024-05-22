// import defaultTheme from 'tailwindcss/defaultTheme';
import withMT from '@material-tailwind/react/utils/withMT';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = withMT({
  important: false,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/assets/svgs/*.svg'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/background.svg')",
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '94rem',
      },
      colors: {
        'affiliate-green': '#05CE81',
        ...colors,
      },
      fontFamily: {
        gordita: ['Gorditas', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
});

export default config;
