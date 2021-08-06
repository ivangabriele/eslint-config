module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          ['index', 'internal', 'parent', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],

    'prettier/prettier': 'error',

    'sort-keys': 'error',
  },
}
