module.export = {
  "extends": [
    'airbnb-base',
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],

  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": ['error',{argsIgnorePattern: 'next'}],
    // 'class-methods-use-this': off,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "SourceType": module,
  },

  "env": {
    "es2021": true,
    "browser": true,
  },
};