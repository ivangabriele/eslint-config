# My Typescript (without React) ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

My most commonly used ESLint configuration for Typescript (without React).

## Usage

```sh
npm i -D @ivangabriele/eslint-config-typescript-base \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
```

or:

```sh
yarn add -D @ivangabriele/eslint-config-typescript-base \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
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
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-base?style=flat-square
[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/typescript-base/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-base
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
