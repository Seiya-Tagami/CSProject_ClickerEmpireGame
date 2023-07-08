# Clicker Empire Game

![Clicker Empire Game](https://github.com/Seiya-Tagami/CSProject_ClickerEmpireGame/assets/107479598/b1ca454c-b28d-4246-9f69-4f67814f5eea)

## 概要
- フロントエンドのみで完結させた、Webゲームアプリです。ハンバーガーを叩いてお金を貯めたり、そのお金で投資したりして、億万長者を目指します。
- ローカルストレージを用いつつ、ゲームロジックを組んだり、ログイン機能を取り入れたりしました。
## 言語・環境

- TypeScript
- TailwindCSS
- Vite

## アーキテクチャ

- MVCモデルを選定してみる。
  - UI / イベントハンドラ / データロジックの分離を図る。

## MVCモデルに基づき、以下のように定義する

Model --

1. ローカルストレージからのデータを取得
2. User データの保持・書き換えのロジックを記述

View --

1. controller からデータを受け取り、原則、UI の表示に専念

Controller --

1. view からのユーザーイベントをキャッチ
2. model へデータの変更を命令
3. model のデータを view へ注入
