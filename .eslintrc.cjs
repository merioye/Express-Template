module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  root: true,
  rules: {
    'import/no-unresolved': 'error',
    'no-unused-vars': 'warn',
    camelcase: 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
  },
};
