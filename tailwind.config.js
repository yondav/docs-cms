// eslint-disable-next-line no-undef
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      colors: {
        primary: 'var(--primary)',
        success: 'var(--success)',
        error: 'var(--error)',
        twitter: 'var(--twitter)',
        opensea: 'var(--opensea)',
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
        },
        overlay: 'var(--overlay)',
      },
      boxShadow: {
        primary: 'var(--shadow)',
        inset: 'var(--shadow-in)',
      },
      borderRadius: {
        xs: 'var(--rounded-xs)',
        sm: 'var(--rounded-sm)',
        md: 'var(--rounded-md)',
        lg: 'var(--rounded-lg)',
        xl: 'var(--rounded-xl)',
      },
    },
  },
  plugins: [],
};
