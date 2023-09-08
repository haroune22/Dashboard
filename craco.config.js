/* eslint-disable no-undef */
// craco.config.js
export default {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
