/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif'],
      'el-messiri': ["El Messiri", "sans-serif"],
    },
    textShadow: {
      sm: '0 1px 2px rgb(0 0 0 / 0.25)',
      lg: '4 4px 4px rgb(0 0 0 / 0.45)',
    },
    extend: {
      animation: {
        wave: 'wave 2s linear infinite',
        moveDown: 'moveDown 1s linear forwards',
        fadeInLeft: 'fadeInLeft 3s linear forwards',
        fadeInRight: 'fadeInRight 3s linear forwards',
        fadeInDown: 'fadeInDown 2s linear forwards',
        fadeIn: 'fadeIn 4s linear forwards',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        moveDown: {
          '0%': { opacity: 1, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(-15px)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translate3d(-20%, 0, 0)' },
          '100%': { opacity: 1, transform: 'none' }
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translate3d(4%, 0, 0)' },
          '100%': { opacity: 1, transform: 'none' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: 1, transform: 'none' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '25%': { opacity: 0 },
          '50%': { opacity: 0 },
          '75%': { opacity: 0.5 },
          '100%': { opacity: 1 }
        },
      }
    },
  },
  plugins: [],
  darkMode:"class"
}
