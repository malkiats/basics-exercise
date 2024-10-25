// .eslintrc.cjs
const globals = require("globals");

module.exports = [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];