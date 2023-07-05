# Clicker Empire Game

![Clicker Empire Game](https://github.com/Seiya-Tagami/CSProject_ClickerEmpireGame/assets/107479598/b1ca454c-b28d-4246-9f69-4f67814f5eea)

## 言語・環境

- TypeScript
- TailwindCSS
- Vite

## アーキテクチャ

- MVC アーキテクチャを選定し、UI、イベントハンドラ、データロジックの分離を行う。
- TypeScript によって関数をモジュール化し、クリーンなコードを目指す。

## MVCに基づいて、以下のように定義する

Model --

1. ローカルストレージからのデータを取得
2. User データの保持・書き換えのロジックを記述

View --

1. controller からデータを受け取り、原則、UI の表示に専念

Controller --

1. view からのユーザーイベントをキャッチ
2. model へデータの変更を命令
3. model のデータを view へ注入
