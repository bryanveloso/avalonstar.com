module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
