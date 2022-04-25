module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys', 'typescript-sort-keys'],
  rules: {
    curly: ['error', 'all'],
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

    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  overrides: [
    {
      files: ['./pages/**/*.js', './pages/**/*.jsx', './pages/**/*.ts', './pages/**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    {
      files: ['**/*.test.js', '**/*.test.ts'],
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
      files: [
        '**/*.spec.js',
        '**/*.test.js',
        './config/*.js',
        './scripts/*.js',
        '**/*.spec.ts',
        '**/*.test.ts',
        './config/*.ts',
        './scripts/*.ts',
      ],
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
