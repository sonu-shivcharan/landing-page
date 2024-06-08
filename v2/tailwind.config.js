
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Customize your sans-serif font
        'serif': ['Georgia', 'Times New Roman', 'serif'], // Customize your serif font
        'mono': ['Courier New', 'Courier', 'monospace'], // Customize your monospace font
      }
    }
  },
  plugins: [],
}
