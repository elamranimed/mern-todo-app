/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "header-bg": "#1F2A44", // Gris anthracite sombre pour le header
        // "footer-bg": "#141A2F", // Noir profond pour le footer
        // "body-bg": "#F7F9FC", // Gris très clair pour le corps
        // "text-primary": "#FFFFFF", // Blanc pour texte sur fonds sombres
        // "text-secondary": "#D1D5DB", // Gris clair pour sous-textes
        accent: "#6366F1", // Indigo comme couleur d’accent
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
