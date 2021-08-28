# My Typescript (without React) ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

## Usage

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-base
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-typescript-base",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Contribution

This is a monorepository, please check the [root readme][lnk-contribution].

---

[img-github]:
  https://img.shields.io/github/workflow/status/ivangabriele/eslint-config/Test%20&%20Publish/main?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-base?style=flat-square
[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/typescript-base/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-base
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
