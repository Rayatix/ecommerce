module.exports = {
  //   content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./pages/**/*.{js, ts, jsx, tsx, mdx}",
    "./components/**/*.{js, ts, jsx, tsx, mdx}",
    "./app/**/*.{js, ts, jsx, tsx, mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColums: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
