# AI駆動開発ワークショップ 第4回 ハンズオン配布リポジトリ

**第4回「Claudeと外部ツールの連携 — MCPサーバー入門」**（2026-05-21）のハンズオン用配布リポジトリです。

## このリポジトリの内容

```
.
├── .mcp.json.template     # Backlog MCP Serverの設定テンプレート
└── buggy-site/            # バグが仕込まれた架空のサポートポータル（修正対象）
    ├── index.html
    ├── styles.css
    └── script.js
```

ハンズオンは、配信中の [**正解サイト**](https://ai-driven-dev-workshop.pages.dev/sessions/session-04/handson/correct-site/) と手元の `buggy-site/` を **見比べてバグを見つけ、Claude Code から Backlog MCP 経由でチケット起票→修正→完了に更新する** という流れです。

## 事前準備（5/21 18:00開始までに）

### 1. このリポジトリをクローン

```powershell
git clone https://github.com/Tsubasa-Kikuchi98/claude-code-workshop-handson-04.git
cd claude-code-workshop-handson-04
```

### 2. Node.js をインストール

Backlog MCP Server を起動するのに必要です。PowerShellで以下を実行：

```powershell
winget install OpenJS.NodeJS.LTS
```

インストール後、**ターミナルを開き直して** `node --version` でバージョンが返ればOK。

### 3. Backlog API キーを発行

会社の Backlog にログイン → **個人設定 > API** → 「新しいAPIキーを発行する」。
発行されたキーはメモ帳等に控えておいてください（Slack・Teamsで他人に共有しないこと）。

## 当日の流れ

詳しい手順は講義資料の Part 2・Part 3 を参照してください。

- 講義資料: <https://ai-driven-dev-workshop.pages.dev/sessions/session-04/lecture.html>
- 正解サイト: <https://ai-driven-dev-workshop.pages.dev/sessions/session-04/handson/correct-site/>

## 関連リポジトリ

- 第2回ハンズオン配布: <https://github.com/Tsubasa-Kikuchi98/claude-code-workshop-handson>
