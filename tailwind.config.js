const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2c3e50", // Azul oscuro
        secondary: "#e74c3c", // Rojo vivo
        textDark: "#333", // Gris oscuro
        textLight: "#f5f5f5", // Blanco suave
        backgroundLight: "#ecf0f1", // Gris azulado claro
        backgroundDark: "#34495e", // Azul oscuro
        accent: "#3498db", // Azul claro
        accentHover: "#2980b9", // Azul más oscuro al pasar el mouse
        border: "#bdc3c7", // Gris azulado claro
      },
    },
  },
  plugins: [],
}
