# backend 構成

## ディレクトリ構成

```bash
kotlin/com/example/todo/
├── core/ # アプリ全体で共有する機能や定義(未定)
│   ├── errors/    # エラーハンドラー
│   ├── constants/ # 定数(グローバル)
│   └── utils/     # ユーティリティクラスや関数
│
├── shared/ # 共通機能ごとのディレクトリ(未定)
│
├── controller/
│   └── controller.kt
│
└── features/ # 機能毎のディレクトリ
    └── feature_name/
        │
        ├── data/ # データ層
        │   ├── models/       # Entity
        │   └── repositories/ # DB操作関連
        │       ├── repositories.kt     # Repository interface
        │       └── repositoriesImpl.kt # Repository実装
        │
        └── application/ # サービス層
            └── Service.kt # Service実装

```

## API IF 追加時

openapi.yml を更新したら下記のコマンドで data class(DTO)とコントローラーを自動生成すること

```bash
# 下記の二つをまとめて実行
make code-gen

# data class(DTO) のみ生成
make code-gen-model

# controller のみ生成
make code-gen-api
```

## DB 構成追加

DB に対して変更を行った場合、２つ手順を行う

-   migration 対応(flyway)
-   jooq 自動生成の実行

### migration 対応

直接 DB インスタンスを操作するのではなく操作の冪等性観点から `migration/` 直下にクエリを用意し
アプリ起動 or build で DB の同期を行う

##### 対象階層

> 例: backend/todo/src/main/resources/db/migration/V1\_\_init_schema.sql

#### 手順

追加したいクエリ（テーブル追加, 変更, etc.）を `migration/` 直下に `{V[version番号]__説明}.sql` (数字の後にアンダースコア 2 個) 用意

追加後はバックエンド起動時に読み込んでクエリ実行する(既にクエリ構成が適用されている場合はスキップ)

> [!CAUTION]  
> 構成クエリは一度実行して適用されたら以降の変更は Version 番号をあげてファイルを用意する

### jooq テーブル定義自動生成

jooq の自動生成で DB のテーブルやカラムの型定義を出力し DB 操作はこの型を用いて操作する

自動生成コマンドは以下

```bash
make jooq-code-gen
```
