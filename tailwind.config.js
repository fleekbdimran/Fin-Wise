


// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Specify where to look for class names
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // 'aboutimage': "url('/AboutBack.png')",
        
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};
