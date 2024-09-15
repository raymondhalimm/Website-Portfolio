/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' ,
    'node_modules/flowbite-react/lib/esm/**/*.js',
    'node_modules/flowbite/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'underline': 'transform',
      },
      transformOrigin: {
        'bottom-right': 'bottom right',
        'bottom-left': 'bottom left',
      },
      scale: {
        '0': '0',
        '100': '1',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addComponents }) {
      addComponents({
        '.underline-hover': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '3px',
            width: '100%',
            height: '1px',
            backgroundColor: 'currentColor',
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s ease',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
          '@screen sm': {
            '&::after': {
              height: '3px',  // For small screens
            },
          },
        },
      });
    },
  ],
}

