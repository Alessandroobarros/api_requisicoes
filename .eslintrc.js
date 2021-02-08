module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    "parser": "babel-eslint",

    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },

    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "rules": {
        'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    }
};
