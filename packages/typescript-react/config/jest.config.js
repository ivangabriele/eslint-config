module.exports = {
  resolver: '<rootDir>/config/jest.resolver.js',
  rootDir: '..',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2019',
        },
      },
    ],
  },
}
