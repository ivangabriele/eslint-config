const { ESLint } = require('eslint')
const fs = require('fs')

const eslintConfig = require('.')

describe('@ivangabriele/eslint-config-typescript-base', () => {
  let results

  beforeAll(async () => {
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      overrideConfig: {
        parserOptions: {
          project: '../../tsconfig.json',
        },
      },
    })

    fs.writeFileSync(`${__dirname}/sample.ts`, `const foo = "bar"\n`)
    results = await eslint.lintFiles('./sample.ts')
  })

  test('There should be 1 result.', () => {
    expect(results).toHaveLength(1)
  })

  test('There should be 3 messages.', () => {
    expect(results[0].messages).toHaveLength(3)
  })

  test('The "no-unused-vars" rule should be triggered.', () => {
    expect(results[0].messages[0].ruleId).toBe('no-unused-vars')
  })

  test('The "@typescript-eslint/no-unused-vars" rule should be triggered.', () => {
    expect(results[0].messages[1].ruleId).toBe('@typescript-eslint/no-unused-vars')
  })

  test('The "prettier/prettier" rule should be triggered.', () => {
    expect(results[0].messages[2].ruleId).toBe('prettier/prettier')
  })
})
