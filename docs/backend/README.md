# backend 構成

## DB 構成追加

> [!CAUTION]  
> 構成クエリは一度実行して適用されたら以降の変更は Version 番号をあげてファイルを用意する

追加したいクエリ（テーブル追加, 変更, etc.）を `migration/` 直下に `{V[version番号]__説明}.sql` (数字の後にアンダースコア 2 個) 用意  
階層は下記

> 例: backend/todo/src/main/resources/db/migration/V1\_\_init_schema.sql

追加後はバックエンド起動時に読み込んでクエリ実行する(既にクエリ構成が適用されている場合はスキップ)
