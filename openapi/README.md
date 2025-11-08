# API 定義

## ディレクトリ構造

```bash
openapi/
│
├── schemas/ # スキーマ定義
│   ├── exception/ # 例外スキーマ
│   |   ├── UnExpectedError.kt
│   |   └── xxx.kt
│   |
│   └── features/  # 機能別スキーマ
│       └── xxx
│           └── xxx.kt
│
└── openapi.yml
```

スキーマは切り出して別ファイルで管理

## 参照

[Swagger](https://swagger.io/docs/specification/v3_0/basic-structure/)
