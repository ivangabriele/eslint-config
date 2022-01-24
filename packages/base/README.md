# My Javascript (without React) ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

My most commonly used ESLint configuration for Javascript (without React).

## Usage

```sh
yarn add -DE @ivangabriele/eslint-config-base
npx install-peerdeps -D @ivangabriele/eslint-config-base
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

[img-github]:
  https://img.shields.io/github/workflow/status/ivangabriele/eslint-config/Test%20&%20Publish/main?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-base?style=flat-square
[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/base/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-base
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
