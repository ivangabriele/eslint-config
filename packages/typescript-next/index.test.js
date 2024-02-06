import chalk from 'chalk'
import { ESLint } from 'eslint'
import { getAbsolutePath } from 'esm-path'
import fs from 'fs'

import eslintConfig from './index.cjs'

console.error = () => {}
console.warn = () => {}

let ERROR_COUNT = 0
let TEST_COUNT = 0

const LOGS = []

function describe(description, callback) {
  LOGS.push(`  ${description}`)

  callback()
}

function test(description, callback) {
  try {
    TEST_COUNT += 1

    callback()

    LOGS.push(`    ${chalk.blue('✓')} ${chalk.gray(description)}`)
  } catch (error) {
    LOGS.push(`    ${chalk.red('✕')} ${chalk.gray(description)}`)
    LOGS.push(`      ${chalk.red(error.message)}`)

    ERROR_COUNT += 1
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expecting \`${actual}\` to be \`${expected}\`, but got \`${actual}\`.`)
      }
    },
  }
}

const eslint = new ESLint({
  baseConfig: eslintConfig,
  overrideConfig: {
    parserOptions: {
      project: '../../tsconfig.json',
    },
  },
})

fs.writeFileSync(getAbsolutePath(import.meta.url, 'sample.ts'), `const foo = "bar"\n`)
const results = await eslint.lintFiles('./sample.ts')

describe('@ivangabriele/eslint-config-typescript-next', () => {
  test('There should be 1 result.', () => {
    expect(results.length).toBe(1)
  })

  test('There should be 2 messages.', () => {
    expect(results[0].messages.length).toBe(2)
  })

  test('The "@typescript-eslint/no-unused-vars" rule should be triggered.', () => {
    expect(results[0].messages[0].ruleId).toBe('@typescript-eslint/no-unused-vars')
  })

  test('The "prettier/prettier" rule should be triggered.', () => {
    expect(results[0].messages[1].ruleId).toBe('prettier/prettier')
  })
})

// eslint-disable-next-line no-console
console.log(
  [
    `${ERROR_COUNT > 0 ? chalk.bgYellow(chalk.black(' FAIL ')) : chalk.bgBlue(chalk.black(' PASS '))} ./index.test.js`,
    ...LOGS,
    '',
    `Tests:       ${
      ERROR_COUNT > 0 ? chalk.yellow(`${ERROR_COUNT} failed`) : chalk.blue(`${TEST_COUNT - ERROR_COUNT} passed`)
    }, ${TEST_COUNT} total`,
  ].join('\n'),
)

if (ERROR_COUNT > 0) {
  process.exit(1)
}
