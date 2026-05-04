import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#080F09',
          900: '#0D1F10',
          800: '#162B19',
          700: '#1E3D22',
          600: '#2A5430',
          500: '#3A6E41',
          400: '#5A8F62',
          300: '#7AAD82',
          200: '#9CAD93',
          100: '#C4D4C0',
          50: '#EBF2EA',
        },
        sage: '#9CAD93',
        cream: '#F5F0E8',
        gold: '#C9A96E',
        earth: '#8B7355',
      },
      fontFamily: {
        pretendard: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
      lineHeight: {
        'korean-body': '1.7',
        'korean-heading': '1.3',
      },
      letterSpacing: {
        'widest-kr': '0.15em',
      },
      animation: {
        'fade-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particleFloat 8s linear infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #0D1F10 0%, #1E3D22 50%, #0D1F10 100%)',
        'gradient-dark-overlay': 'linear-gradient(to bottom, rgba(13, 31, 16, 0.6) 0%, rgba(13, 31, 16, 0.8) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
