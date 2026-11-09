/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#06466B',
          darkNavy: '#092B46',
          midnight: '#041829',
          yellow: '#F5C52E',
          yellowHover: '#E5B21D',
          lightYellow: '#FEF9E7',
          lightGrey: '#F5F7FA',
          slateGrey: '#E2E8F0',
          mutedText: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', 'sans-serif'],
        heading: ['Poppins', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(6, 70, 107, 0.15)',
        'premium-hover': '0 25px 50px -12px rgba(6, 70, 107, 0.25)',
        'gold-glow': '0 10px 25px -5px rgba(245, 197, 46, 0.35)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #092B46 0%, #06466B 60%, #0B5B8A 100%)',
        'brand-navy-gradient': 'linear-gradient(135deg, #041829 0%, #092B46 50%, #06466B 100%)',
        'hero-gradient': 'linear-gradient(135deg, #041829 0%, #092B46 50%, #06466B 100%)',
        'brand-hero-gradient': 'linear-gradient(135deg, #041829 0%, #092B46 50%, #06466B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F5C52E 0%, #FFD54F 50%, #E5B21D 100%)',
        'brand-gold-gradient': 'linear-gradient(135deg, #F5C52E 0%, #FFD54F 50%, #E5B21D 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 247, 250, 0.9) 100%)',
      }
    },
  },
  plugins: [],
}

