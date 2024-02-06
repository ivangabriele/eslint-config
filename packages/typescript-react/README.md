# My Typescript with React ESLint Configuration

[![img-license]][lnk-license] [![img-npm]][lnk-npm] [![img-github]][lnk-github]

My most commonly used ESLint configuration for Typescript with React.

## Usage

```sh
npm i -DE @ivangabriele/eslint-config-typescript-react \
  @ivangabriele/prettier-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  eslint-plugin-typescript-sort-keys \
  prettier \
  typescript
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-react \
  @ivangabriele/prettier-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  eslint-plugin-typescript-sort-keys \
  prettier \
  typescript
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-typescript-react",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

And add this line to your package.json:

```json
{
  // ...
  "prettier": "@ivangabriele/prettier-config"
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

[img-github]: https://img.shields.io/github/actions/workflow/status/ivangabriele/eslint-config/check.yml?branch=main&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-react?style=for-the-badge

[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/packages/typescript-react/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-react
[lnk-contribution]: https://github.com/ivangabriele/eslint-config#contribution
