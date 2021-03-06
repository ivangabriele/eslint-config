module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    extraFileExtensions: ['.cjs'],
  },
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    curly: ['error', 'all'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'newline-before-return': 'error',

    'import/no-default-export': 'error',
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
    'import/prefer-default-export': 'off',

    'prettier/prettier': 'error',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      env: {
        browser: false,
        jest: true,
        node: true,
      },
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
      },
    },
    {
      files: ['**/*.spec.js', '**/*.test.js', './*.cjs', './*.js', './config/*.js', './scripts/*.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
}
