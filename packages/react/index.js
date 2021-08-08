module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'sort-keys': 'error',

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

    'react/jsx-sort-props': 'error',
  },
}
