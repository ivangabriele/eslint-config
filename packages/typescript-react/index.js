module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    // 'sort-keys': 'error',

    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['builtin', 'external'], ['parent', 'sibling', 'index'], ['type'], ['object']],
        'newlines-between': 'always',
      },
    ],

    'prettier/prettier': 'error',

    'react/jsx-sort-props': 'error',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],
  },
}
