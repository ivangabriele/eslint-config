# My ESLint Configurations

[![img-license]][lnk-license] [![img-github]][lnk-github]

My most commonly used ESLint configurations.

---

- [Usage](#usage)
  - [Javascript (without React)](#javascript-without-react)
  - [Javascript with React](#javascript-with-react)
  - [Typescript (without React)](#typescript-without-react)
  - [Typescript with React](#typescript-with-react)
  - [Typescript with Next.js](#typescript-with-nextjs)
  - [With Yarn Plug'n'Play](#with-yarn-plugnplay)
    - [Visual Studio Code](#visual-studio-code)
- [Contribute](#contribute)

---

## Usage

### Javascript (without React)

[![img-npm-base]][lnk-npm-base]

```sh
npm i -DE @ivangabriele/eslint-config-base \
  @ivangabriele/prettier-config \
  eslint-config-airbnb-base \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  prettier
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-base \
  @ivangabriele/prettier-config \
  eslint-config-airbnb-base \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  prettier
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-base"
}
```

And add this line to your `package.json`:

```json
{
  // ...
  "prettier": "@ivangabriele/prettier-config"
}
```

### Javascript with React

[![img-npm-react]][lnk-npm-react]

```sh
npm i -DE @ivangabriele/eslint-config-react \
  @ivangabriele/prettier-config \
  eslint \
  eslint-config-airbnb \
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
  prettier
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-react \
  @ivangabriele/prettier-config \
  eslint \
  eslint-config-airbnb \
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
  prettier
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-react"
}
```

And add this line to your `package.json`:

```json
{
  // ...
  "prettier": "@ivangabriele/prettier-config"
}
```

### Typescript (without React)

[![img-npm-typescript-base]][lnk-npm-typescript-base]

```sh
npm i -DE @ivangabriele/eslint-config-typescript-base \
  @ivangabriele/prettier-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  eslint-plugin-typescript-sort-keys \
  prettier \
  typescript
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-base \
  @ivangabriele/prettier-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-no-null \
  eslint-plugin-prettier \
  eslint-plugin-sort-destructure-keys \
  eslint-plugin-sort-keys-fix \
  eslint-plugin-typescript-sort-keys \
  prettier \
  typescript
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

And add this line to your `package.json`:

```json
{
  // ...
  "prettier": "@ivangabriele/prettier-config"
}
```

### Typescript with React

[![img-npm-typescript-react]][lnk-npm-typescript-react]

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

And add this line to your `package.json`:

```json
{
  // ...
  "prettier": "@ivangabriele/prettier-config"
}
```

### Typescript with Next.js

[![img-npm-typescript-next]][lnk-npm-typescript-next]

```sh
npm i -DE @ivangabriele/eslint-config-typescript-next \
  @ivangabriele/prettier-config \
  @next/eslint-plugin-next \
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
yarn add -DE @ivangabriele/eslint-config-typescript-next \
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
  "extends": "@ivangabriele/eslint-config-typescript-next",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

And add this line to your `package.json`:

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

## Contribute

Please check the [contributing documentation](CONTRIBUTING.md).

---

[img-github]: https://img.shields.io/github/actions/workflow/status/ivangabriele/eslint-config/check.yml?branch=main&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=for-the-badge
[img-npm-base]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-base?style=flat-square
[img-npm-react]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-react?style=flat-square
[img-npm-typescript-base]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-base?style=flat-square
[img-npm-typescript-next]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-next?style=flat-square
[img-npm-typescript-react]: https://img.shields.io/npm/v/@ivangabriele/eslint-config-typescript-react?style=flat-square

[lnk-github]: https://github.com/ivangabriele/eslint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/eslint-config/blob/main/LICENSE
[lnk-npm-base]: https://www.npmjs.com/package/@ivangabriele/eslint-config-base
[lnk-npm-react]: https://www.npmjs.com/package/@ivangabriele/eslint-config-react
[lnk-npm-typescript-base]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-base
[lnk-npm-typescript-next]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-next
[lnk-npm-typescript-react]: https://www.npmjs.com/package/@ivangabriele/eslint-config-typescript-react
