const assert = require('assert')
const { ESLint } = require('eslint')

const eslintConfig = require('.')

async function test() {
  try {
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      overrideConfig: {
        parserOptions: {
          project: '../../tsconfig.json',
        },
      },
    })

    const results = await eslint.lintFiles('./sample.ts')

    assert(results.length === 1, `There should be 1 result.`)
    assert(results[0].messages.length === 2, `There should be 2 messages.`)
    assert(
      results[0].messages[0].ruleId === '@typescript-eslint/no-unused-vars',
      `The "@typescript-eslint/no-unused-vars" rule should be triggered.`,
    )
    assert(results[0].messages[1].ruleId === 'prettier/prettier', `The "prettier/prettier" rule should be triggered.`)
  } catch (err) {
    console.info(`∅ Tests failed.`)
    console.error(err)
    process.exit(1)
  }

  console.info(`√ Tests passed.`)
}

test()
