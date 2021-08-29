module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys', 'typescript-sort-keys'],
  rules: {
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    // 'sort-keys': 'error',

    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['builtin', 'external', 'internal'], ['parent', 'index', 'sibling'], ['type'], ['object']],
        'newlines-between': 'always',
      },
    ],

    'prettier/prettier': 'error',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
}
