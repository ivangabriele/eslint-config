import { ESLint } from 'eslint'
import { getAbsolutePath } from 'esm-path'
import fs from 'fs'

import eslintConfig from './index.cjs'

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

    fs.writeFileSync(getAbsolutePath(import.meta.url, 'sample.ts'), `const foo = "bar"\n`)
    results = await eslint.lintFiles('./sample.ts')
  })

  test('There should be 1 result.', () => {
    expect(results).toHaveLength(1)
  })

  test('There should be 2 messages.', () => {
    expect(results[0].messages).toHaveLength(2)
  })

  test('The "no-unused-vars" rule should be triggered.', () => {
    expect(results[0].messages[0].ruleId).toBe('@typescript-eslint/no-unused-vars')
  })

  test('The "prettier/prettier" rule should be triggered.', () => {
    expect(results[0].messages[1].ruleId).toBe('prettier/prettier')
  })
})
