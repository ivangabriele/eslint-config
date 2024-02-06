import { jest } from '@jest/globals'
import { ESLint } from 'eslint'

import eslintConfig from '.'

describe('@ivangabriele/eslint-config-react', () => {
  let results

  beforeAll(async () => {
    console.error = jest.fn()

    const eslint = new ESLint({ baseConfig: eslintConfig })

    const source = `const foo = "bar"`
    results = await eslint.lintText(source)
  })

  test('It should log an error because "react" is not installed.', () => {
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(console.error).toHaveBeenCalledWith(
      'Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.',
    )
  })

  test('There should be 1 result.', () => {
    expect(results).toHaveLength(1)
  })

  test('There should be 2 messages.', () => {
    expect(results[0].messages).toHaveLength(2)
  })

  test('The "no-unused-vars" rule should be triggered.', () => {
    expect(results[0].messages[0].ruleId).toBe('no-unused-vars')
  })

  test('The "prettier/prettier" rule should be triggered.', () => {
    expect(results[0].messages[1].ruleId).toBe('prettier/prettier')
  })
})
