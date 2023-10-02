/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navdarkbg: "hsl(209, 23%, 22%)",
        bodydarkbg: "hsl(207, 26%, 17%)",
        white: "hsl(0, 0%, 100%)",
        darkgray: "hsl(0, 0%, 52%)",
        darkblue: "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
