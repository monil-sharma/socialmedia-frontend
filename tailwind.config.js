/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smBlue: "#1877f2",
        logBlue: "#1775ee",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        5.5: "5.5 5.5 0%",
        6: "6 6 0%",
        9: "9 9 0%",
        10: "10 10 0%",
      },
    },
  },
  plugins: [],
};
