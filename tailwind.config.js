
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
}