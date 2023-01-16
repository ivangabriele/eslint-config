# My Typescript with Next.js ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

My most commonly used ESLint configuration for Typescript with Next.js.

## Usage

```sh
npm i -DE eslint @ivangabriele/eslint-config-typescript-next
```

or:

```sh
yarn add -DE eslint @ivangabriele/eslint-config-typescript-next
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-typescript-next",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### With Yarn Plug'n'Play

#### Visual Studio Code

```sh
yarn dlx @yarnpkg/sdks vscode
```

## Contribution

This is a monorepository, please check the [root readme][lnk-contribution].

---

[img-github]: https://img.shields.io/github/actions/workflow/status/ivangabriele/eslint-config/test-and-publish.yml?branch=main&style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-next?style=flat-square
[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/typescript-next/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-next
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
