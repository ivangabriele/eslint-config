# My Javascript (without React) ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

My most commonly used ESLint configuration for Javascript (without React).

## Usage

```sh
npm i -D @ivangabriele/eslint-config-base \
  @ivangabriele/prettier-config@3 \
  eslint-config-airbnb-base@8 \
  eslint-config-airbnb-base@15 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1
```

or:

```sh
yarn add -D @ivangabriele/eslint-config-base \
  @ivangabriele/prettier-config@3 \
  eslint-config-airbnb-base@8 \
  eslint-config-airbnb-base@15 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-base"
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
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-base?style=flat-square
[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/base/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-base
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
