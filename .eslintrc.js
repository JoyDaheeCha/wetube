module.exports = {
  env: {
    es6: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": "off",
    "arrow-parens": "off",
    "no-console": "off"
  }
};
