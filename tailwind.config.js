/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif'],
      'dancing-script': ['Dancing Script', 'cursive'],
      'el-messiri': ["El Messiri", "sans-serif"],
      "lora": ["Lora", "serif"],
    },
    textShadow: {
      sm: '0 1px 2px rgb(0 0 0 / 0.25)',
      lg: '4 4px 4px rgb(0 0 0 / 0.45)',
    },
    extend: {
      animation: {
        moveLine: 'moveLine 6s linear forwards',
        wave: 'wave 2s linear infinite',
        moveDown: 'moveDown 1s linear forwards',
        fadeInLeft: 'fadeInLeft 3s linear forwards',
        fadeInRight: 'fadeInRight 3s linear forwards',
        fadeInDown: 'fadeInDown 2s linear forwards',
        fadeIn: 'fadeIn 4s linear forwards',
        rotate: 'rotate 5s infinite',
        pendulum:'pendulum 8s infinite linear',
        progressBar:'progressBar 2s linear forwards'
      },
      keyframes: {
        moveLine: { '0%': { height: 0 }, '100%': { height: '55%' } },
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
        rotate: {
          '15%': { transform: 'rotate(45deg)' },
          '30%': { transform: 'rotate(90deg)' },
          '45%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pendulum: {
          '0% , 100%': { transform: 'rotateY(15deg)'},
          '50%': { transform: 'rotateY(-15deg)'}
        },
        progressBar: {
          '0%':{width:'10%'},
          '50%':{width:'50%'},
          '100%':{width:'90%'}
        }
      }
    },
  },
  plugins: [function ({ addUtilities, theme }) {
      const shadows = theme('textShadow')
      const utilities = Object.keys(shadows).map(key => ({
        [`.text-shadow-${key}`]: { textShadow: shadows[key] },
      }))
      addUtilities(utilities)
    },],
    darkMode:"class"
}
