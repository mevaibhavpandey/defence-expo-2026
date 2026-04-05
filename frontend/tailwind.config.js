module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tactical: {
          dark: '#0B0F0E',
          secondary: '#1A2A24',
          accent: '#00FF9C',
          highlight: '#4B8B6F',
          text: '#E6F1EC'
        }
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'radar-spin': 'radarSpin 15s linear infinite',
        'grid-move': 'gridMove 40s linear infinite',
        'status-pulse': 'statusPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        radarSpin: {
          'to': { transform: 'rotate(360deg)' }
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' }
        },
        statusPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: []
};
