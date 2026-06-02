import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#f5f0e8',
        cream2: '#ede6d6',
        gold:   '#b8952a',
        gold2:  '#d4af4a',
        gold3:  '#f0d080',
        dark:   '#1a1610',
        dark2:  '#2e2618',
        lyra:   { text: '#3a3020', muted: '#6a5c40' },
        white:  '#fdfaf4',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans:    ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
