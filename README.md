# My ESLint Configurations

## Usage

### Typescript with React

```sh
yarn add -DE @ivangabriele/eslint-config-typescript-react
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

### Typescript (without React)

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

### Javascript with React

```sh
yarn add -DE @ivangabriele/eslint-config-react
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-react"
}
```

### Javascript (without React)

```sh
yarn add -DE @ivangabriele/eslint-config-base
```

Then extend it in your `.eslintrc`:

```json
{
  "extends": "@ivangabriele/eslint-config-base"
}
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
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
