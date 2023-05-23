/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   darkblue1: "#02022D",
    //   darkblue2: "#04043a",
    // },
    width: {
      ten: "10%",
      twenty: "20%",
      thirty: "30%",
      fourty: "40%",
      fifty: "50%",
      sixty: "60%",
      seventy: "70%",
      eighty: "80%",
      ninety: "90%",
      hundred: "100%",
    },
  },
  plugins: [],
};
