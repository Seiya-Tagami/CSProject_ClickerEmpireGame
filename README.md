# Clicker Empire Game

![Clicker Empire Game](https://github.com/Seiya-Tagami/CSProject_ClickerEmpireGame/assets/107479598/b1ca454c-b28d-4246-9f69-4f67814f5eea)

## 概要

- フロントエンドのみで完結させた、Web ゲームアプリです。ハンバーガーを叩いてお金を貯めたり、そのお金で投資したりして、億万長者を目指します。
- FW は使わず、TypeScript でスクラッチで作りました。
- ローカルストレージを用いつつ、ゲームロジックを組んだり、ログイン機能を取り入れたりしました。

## 技術スタック

- TypeScript
- TailwindCSS
- Vite

## アーキテクチャ

- MVC モデルを選定してみる。
  - UI / イベントハンドラ / データロジックの分離を図る。

## MVC モデルに基づき、以下のように定義する

Model --

1. ローカルストレージからのデータを取得
2. User データの保持・書き換えのロジックを記述

View --

1. controller からデータを受け取り、原則、UI の表示に専念

Controller --

1. view からのユーザーイベントをキャッチ
2. model へデータの変更を命令
3. model のデータを view へ注入

## 反省点

- controller において、一部 model から値を直接読み取るようにしてしまった。よって、読み取り専用のメソッドを実装し、必要な値のみ取得するようにすべきだったと思う。

## プロジェクトの始め方

```shell
$ npm i
$ npm run dev
```
