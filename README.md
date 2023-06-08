# Clicker Empire Game

## 言語

- TypeScript
- TailwindCSS
- Vite

## 設計

- MVC アーキテクチャを選定し、UI、イベントハンドラ、データロジックの分離を行う。
- TypeScript によって関数をモジュール化することで、クリーンなコードを目指す。

## MVCの定義

model --

1. ローカルストレージからのデータを取得
2. User データの保持・書き換えのロジックを記述

view --

1. controller からデータを受け取り、表示を変更
2. 原則、UI の表示に専念

controller --

1. view からのユーザーイベントをキャッチ
2. model へデータの変更を命令
3. model のデータを view へ注入
