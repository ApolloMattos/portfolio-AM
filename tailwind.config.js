/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1px": "1px"
      },
      colors: {
        "vscode-green": "#40E7C6",
        "vscode-blue-400": "#569CD6",
        "vscode-blue-200": "#88D0FF",
        "vscode-orange": "#E08A67",
      },

      fontFamily: {
        "consolas": "'Consolas', 'Courier New', monospace",
        "poppins": "'Poppins', 'Arial', sans-serif",
        "montserrat": "'Montserrat', 'Helvetica', 'Arial', sans-serif",
      },
    },
  },
  plugins: [],
};
