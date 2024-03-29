/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  // https://nextjs.org/docs/pages/building-your-application/configuring/eslint#migrating-existing-config
  extends: ['airbnb', 'airbnb-typescript', 'next', 'prettier'],
  plugins: [
    '@next/eslint-plugin-next',
    'prettier',
    'sort-keys-fix',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'no-null',
  ],
  ignorePatterns: ['/.next/', '/.yarn/', 'next-env.d.ts'],
  rules: {
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    'no-console': 'error',

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

    'no-null/no-null': 'warn',

    'prettier/prettier': 'error',

    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',

    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: false }],

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-use-before-define': 'off',

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  overrides: [
    // {
    //   files: [
    //     './app/**/*.js',
    //     './app/**/*.jsx',
    //     './common/**/*.js',
    //     './pages/**/*.jsx',
    //     './app/**/*.ts',
    //     './app/**/*.tsx',
    //     './common/**/*.ts',
    //     './pages/**/*.tsx',
    //   ],
    //   env: {
    //     browser: true,
    //     node: true,
    //   },
    // },
    // {
    //   files: ['./api/**/*.js', './pages/**/*.js', './api/**/*.ts', './pages/**/*.ts'],
    //   env: {
    //     browser: false,
    //     node: true,
    //   },
    // },
    // {
    //   files: ['./pages/**/*.js', './pages/**/*.jsx', './pages/**/*.ts', './pages/**/*.tsx'],
    //   rules: {
    //     'import/no-default-export': 'off',
    //     'import/prefer-default-export': 'error',
    //   },
    // },
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
