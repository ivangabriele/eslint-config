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
git co -B X.Y.Z
npm version major|minor|patch
npm version major|minor|patch --workspaces
git add .
git commit --amend --no-edit
git push origin HEAD --tags
```
