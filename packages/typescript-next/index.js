module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    extraFileExtensions: ['.cjs'],
  },
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys', 'typescript-sort-keys'],
  ignorePatterns: ['/.next/', '/.yarn/', 'next-env.d.ts'],
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
    'react/react-in-jsx-scope': 'off',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  overrides: [
    {
      files: [
        './app/**/*.js',
        './app/**/*.jsx',
        './common/**/*.js',
        './pages/**/*.jsx',
        './app/**/*.ts',
        './app/**/*.tsx',
        './common/**/*.ts',
        './pages/**/*.tsx',
      ],
      env: {
        browser: true,
        node: true,
      },
    },
    {
      files: ['./api/**/*.js', './pages/**/*.js', './api/**/*.ts', './pages/**/*.ts'],
      env: {
        browser: false,
        node: true,
      },
    },
    {
      files: ['./pages/**/*.js', './pages/**/*.jsx', './pages/**/*.ts', './pages/**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      plugins: ['jest'],
      env: {
        jest: true,
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
        '**/*.test.jsx',
        './*.cjs',
        './*.js',
        './config/**/*.js',
        './scripts/**/*.js',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        './config/**/*.ts',
        './scripts/**/*.ts',
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
    {
      files: [
        '**/*.spec.js',
        './*.cjs',
        './*.js',
        './config/**/*.js',
        './scripts/**/*.js',
        '**/*.spec.ts',
        './config/**/*.ts',
        './scripts/**/*.ts',
      ],
      env: {
        browser: false,
        node: true,
      },
    },
  ],
}
