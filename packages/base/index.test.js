import { ESLint } from 'eslint'

import eslintConfig from '.'

describe('@ivangabriele/eslint-config-base', () => {
  let results

  beforeAll(async () => {
    const eslint = new ESLint({ baseConfig: eslintConfig })

    const source = `const foo = "bar"`
    results = await eslint.lintText(source)
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

// test('', () => {

//   expect(results).toHaveLength(1)
//   expect(results[0].messages).toHaveLength(2)
//   expect(results[0].messages).toMatchObject([
//     {
//       ruleId: 'no-unused-vars', `The "no-unused-vars" rule should be triggered.`
//     }
//   ])
// })
