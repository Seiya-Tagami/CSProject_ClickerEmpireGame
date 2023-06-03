# Clicker Empire Game

## 設計

- TypeScript による MVC アーキテクチャを採用

model --

1. ローカルストレージからのデータを取得
2. User データの保持・書き換えのロジックを記述
3. 恒常的なデータの保持（検討中）

controller --

1. view からのユーザーのイベントをキャッチする
2. model へデータの変更を命令
3. model のデータを view へ流し込む

view --

1. controller からデータを受け取る
2. 原則、UI の表示に専念する
