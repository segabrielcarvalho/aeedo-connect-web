import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        primary: '#E50808', // Cor Primária
        secondary: '#071108', // Cor Secundária
        backgroundMain: '#FFFFFF', // Cor de Fundo Principal
        backgroundAlt: '#FFC2C2', // Cor de Fundo Alternativo
        textPrimary: '#FFFFFF', // Texto Principal
        textSecondary: '#666666', // Texto Secundário
        buttonHighlight: '#1D9BF0', // Destaques e Botões Futuros
        error: '#FF6B6B', // Estados de Erro
        success: '#4CAF50', // Estados de Sucesso
      },
    },
  },
  plugins: [],
} satisfies Config
