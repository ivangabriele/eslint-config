const assert = require('assert')
const { ESLint } = require('eslint')

const eslintConfig = require('.')

async function test() {
  try {
    const eslint = new ESLint({ baseConfig: eslintConfig })

    const source = `const foo = "bar"`
    const results = await eslint.lintText(source)

    assert(results.length === 1, `There should be 1 result.`)
    assert(results[0].messages.length === 2, `There should be 2 messages.`)
    assert(results[0].messages[0].ruleId === 'no-unused-vars', `The "no-unused-vars" rule should be triggered.`)
    assert(results[0].messages[1].ruleId === 'prettier/prettier', `The "prettier/prettier" rule should be triggered.`)
  } catch (err) {
    console.info(`∅ Tests failed.`)
    console.error(err)
    process.exit(1)
  }

  console.info(`√ Tests passed.`)
}

test()
