# CSProject_BankingApp_part2

## 設計案検討（理想）

### コンセプト

- 疎結合性
- UI とデータロジックの分離

### デザインパターン

- Atomic Design
- Container Presentational Pattern の疑似的採用

### 各ファイルの役割

- index.html
  - Components のレンダリング
  - `<script/>`によるローカルストレージデータの読み込み、Components に流し込む
- Components/
