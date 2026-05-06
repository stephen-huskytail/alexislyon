import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B4A3A', sage: '#4A7C59', 'sage-lt': '#8AAF94', cream: '#F7F3ED', warm: '#EDE6DA', 'warm-dk': '#D4C8B4', gold: '#C8922A', 'gold-lt': '#E8C468', rose: '#9B6B7A', dark: '#2C2C2C', mid: '#6B6B6B'
      },
      fontFamily: { display: ['var(--font-cormorant)'], body: ['var(--font-jost)'] },
      boxShadow: { soft: '0 24px 70px rgba(27, 74, 58, 0.12)' },
      backgroundImage: { 'forest-orbs': 'radial-gradient(circle at 20% 20%, rgba(232,196,104,.18), transparent 28%), radial-gradient(circle at 80% 70%, rgba(138,175,148,.16), transparent 32%)' }
    }
  },
  plugins: []
};
export default config;
