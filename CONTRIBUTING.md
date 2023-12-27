# Contributing

### Getting Started

```sh
npm i
```

### Release

```sh
npm version X.Y.Z
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
