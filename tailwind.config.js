/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.html'],
  theme: {
    extend: {
      colors: {
        tailwind: '#38bdf8',
        'yamoo9-indigo': {
          100: '#dbd1f7',
          200: '#b7a3ef',
          300: '#9375e7',
          400: '#6e47df',
          500: '#4a19d7',
          600: '#3b14ac',
          700: '#2d0f81',
          800: '#1e0a56',
          900: '#0f052b',
        },
        'jongmin-green': {
          100: '#cfece7',
          200: '#9fd9cf',
          300: '#70c6b7',
          400: '#40b39f',
          500: '#10a086',
          600: '#0d806c',
          700: '#0a6051',
          800: '#064036',
          900: '#03201b',
        },
        'ssh-green': {
          100: '#d3e1d1',
          200: '#a7c3a3',
          300: '#7ca575',
          400: '#508747',
          500: '#246919',
          600: '#1d5414',
          700: '#163f0f',
          800: '#0e2a0a',
          900: '#071505',
        },
        'rong-violet': {
          100: '#ede2fa',
          200: '#dac5f6',
          300: '#c8a8f1',
          400: '#b68bec',
          500: '#a36de8',
          600: '#8358b9',
          700: '#62428b',
          800: '#412c5d',
          900: '#21162e',
        },
        'psu-green': {
          100: '#def4d1',
          200: '#bee9a3',
          300: '#9dde75',
          400: '#7dd348',
          500: '#5cc81a',
          600: '#4aa015',
          700: '#37780f',
          800: '#25500a',
          900: '#122805',
        },
        'hw-blue': {
          100: '#d0d2f1',
          200: '#a2a4e3',
          300: '#7377d5',
          400: '#4449c7',
          500: '#161cb9',
          600: '#111694',
          700: '#0d116f',
          800: '#090b4a',
          900: '#040625',
        },
        'jaerin-blue': {
          100: '#e8f4f8',
          200: '#d1eaf1',
          300: '#bbdfeb',
          400: '#a4d4e4',
          500: '#8dcadd',
          600: '#71a1b1',
          700: '#557985',
          800: '#385158',
          900: '#1c282c',
        },
      },
    },
  },
  plugins: [],
};
