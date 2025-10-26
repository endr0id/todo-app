# ディレクトリ構成

## 命名規則
[Lintルール](https://github.com/dukeluo/eslint-plugin-check-file/tree/main)で命名規則を設定し一貫性を保つ


### フォルダ
ディレクトリ名はケバブケースを用いて命名する

```sh
kebab-case/
```

### ファイル

ファイル名は `*.{js|ts}`, `*.{jsx|tsx}` でケースを分けている
- {js|ts}は`CAMEL_CASE`
  ```sh
  # js or ts
  appComponent.ts
  ```

- {jsx|tsx}は`PASCAL_CASE`
  ```sh
  # jsx or tsx
  AppComponent.tsx
  ```