/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "very-dark-desaturate-blue": "var(--very-dark-desaturate-blue)",
        "soft-red": "var(--soft-red)",
        "soft-violet": "var(--soft-violet)",
        "soft-blue": "var(--soft-blue)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
      },
      fontFamily: {
        "kumbh-sans": "var(--kumbh-sans)",
      },
    },
  },
  plugins: [],
};
