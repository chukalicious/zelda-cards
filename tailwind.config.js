
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    container: {center: true}, 
     screens: {
      sm: '200px',
      md: '550px',
      lg: '976px',
      xl: '1440px',
    }
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
}