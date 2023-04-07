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
- [Contribution](#contribution)
  - [Getting Started](#getting-started)
  - [Releasing](#releasing)
  - [Recommended IDE Settings](#recommended-ide-settings)

---

## Usage

### Javascript (without React)

[![img-npm-base]][lnk-npm-base]

```sh
npm i -DE @ivangabriele/eslint-config-base \
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
yarn add -DE @ivangabriele/eslint-config-base \
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

### Javascript with React

[![img-npm-react]][lnk-npm-react]

```sh
npm i -DE @ivangabriele/eslint-config-react \
  @ivangabriele/prettier-config@3 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-react \
  @ivangabriele/prettier-config@3 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-react"
}
```

### Typescript (without React)

[![img-npm-typescript-base]][lnk-npm-typescript-base]

```sh
npm i -DE @ivangabriele/eslint-config-typescript-base \
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
yarn add -DE @ivangabriele/eslint-config-typescript-base \
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

### Typescript with React

[![img-npm-typescript-react]][lnk-npm-typescript-react]

```sh
npm i -DE @ivangabriele/eslint-config-typescript-react \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-react \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
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

### Typescript with Next.js

[![img-npm-typescript-next]][lnk-npm-typescript-next]

```sh
npm i -DE @ivangabriele/eslint-config-typescript-next \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
```

or:

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-next \
  @ivangabriele/prettier-config@3 \
  @typescript-eslint/eslint-plugin@5 \
  @typescript-eslint/parser@5 \
  eslint@8 \
  eslint-config-airbnb@19 \
  eslint-config-airbnb-typescript@17 \
  eslint-config-prettier@8 \
  eslint-plugin-import@2 \
  eslint-plugin-jest@27 \
  eslint-plugin-jsx-a11y@6 \
  eslint-plugin-no-null@1 \
  eslint-plugin-prettier@4 \
  eslint-plugin-react@7 \
  eslint-plugin-react-hooks@4 \
  eslint-plugin-sort-destructure-keys@1 \
  eslint-plugin-sort-keys-fix@1 \
  eslint-plugin-typescript-sort-keys@2 \
  typescript@5
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

### Getting Started

```sh
npm i
```

### Releasing

```sh
npm version major|minor|patch
```

This will automatically create a full tagged commit with packages version bump in a version branch before pushing them
to the remote repository.

### Recommended IDE Settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "editor.formatOnSave": true,
  "eslint.packageManager": "npm",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

[img-github]: https://img.shields.io/github/actions/workflow/status/ivangabriele/eslint-config/test-and-publish.yml?branch=main&style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/eslint-config?style=flat-square
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
