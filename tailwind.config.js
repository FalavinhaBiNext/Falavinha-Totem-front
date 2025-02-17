

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#007175',
        secondary_color: '#00F7FF',
        tertiary_color: '#6E3DEB',
        light_color: '#FFF',
        dark_color: '#060113',
        black_color: '#000',
        gray_color: '#CCCCCC',
        gray_color_dark: '#7D7D7D',
        app_bg: "#00918A",
        app_bg_dark: "#0F495CFE",
        admin_background: '#00918ADE',
        special_border: "rgb(255 255 255 / 20%)",
        // success_color: '#07bc0c',
        // warning_color: '#f1c40f',
        error_color: '#e62410',
      },
      boxShadow: {
        'bx-1': '0px 10px 15px rgba(0, 0, 0, 0.3)',
        'bx-2': '2px 0px 25px 2px rgba(0,0,0,0.5)',
        'bx-3': '2px 3px 6px 0px rgba(0, 0, 0, 0.5)',
        'bx-4': '0px 6px 10px 0px rgb(0 0 0 / 50%)',
      },
      padding: {
        'base_container': '0 calc((100% - 1024px) / 2) 0 calc((100% - 1024px) / 2)',
        // 'custom_container': '0 calc((100% - 1070px) / 2) 0 calc((100% - 1070px) / 2)',
        // 'ultrawide_container': '0 calc((100% - 1670px) / 2) 0 calc((100% - 1670px) / 2)',
      },
      fontFamily: {
        gilroyLight: ['Gilroy-light', 'sans-serif'],
        gilroyThin: ['Gilroy-thin', 'sans-serif'],
        gilroyBold: ['Gilroy-bold', 'sans-serif'],
      },
      gridTemplateColumns: {
        'standard': 'repeat(auto-fit, minmax(180px, 1fr))',
        'standard2': 'repeat(auto-fit, minmax(320px, 1fr))',
        'standard3': 'repeat(auto-fit, minmax(230px, 1fr))',
        'adminGrid': 'repeat(auto-fit, minmax(350px, 1fr))',
        // 'footerXl': 'repeat(auto-fit, minmax(170px, 1fr))',
        // 'resources': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
    animation: {
      intro: 'intro 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards',
      spin: 'spin 0.8s linear infinite',
    },
    keyframes: {
      intro: {
        '0%': { transform: 'translateY(-50px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      }
    },
    clipPath: {
      polygon: 'polygon(100% 0, 100% 0%, 100% 100%, 0 100%, 0% 30%)',
      polygon2: 'polygon(100% 15%, 100% 0%, 100% 100%, 0 100%, 0% 60%)',
      none: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.clip-polygon': {
          clipPath: theme('clipPath.polygon'),
        },
        '.clip-polygon2': {
          clipPath: theme('clipPath.polygon2'),
        },
        '.clip-none': {
          clipPath: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}