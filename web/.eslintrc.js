module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './src/components'],
          ['@/containers', './src/containers'],
          ['@/hooks', './src/hooks'],
          ['@/images', './src/images'],
          ['@/lib', './src/lib'],
          ['@/', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
