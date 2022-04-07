# My ESLint Configurations

[![img-license]][lnk-license] [![img-github]][lnk-github]

My most commonly used ESLint configurations.

## Usage

### Javascript (without React)

[![img-npm-base]][lnk-npm-base]

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

### Javascript with React

[![img-npm-react]][lnk-npm-react]

```sh
yarn add -DE @ivangabriele/eslint-config-react
npx install-peerdeps -D @ivangabriele/eslint-config-react
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
yarn add -DE @ivangabriele/eslint-config-typescript-base
npx install-peerdeps -D @ivangabriele/eslint-config-typescript-base
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
yarn add -DE @ivangabriele/eslint-config-typescript-react
npx install-peerdeps -D @ivangabriele/eslint-config-typescript-react
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
yarn add -DE @ivangabriele/eslint-config-typescript-next
npx install-peerdeps -D @ivangabriele/eslint-config-typescript-next
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

[img-github]: https://img.shields.io/github/workflow/status/ivangabriele/eslint-config/Test%20&%20Publish/main?style=flat-square
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
