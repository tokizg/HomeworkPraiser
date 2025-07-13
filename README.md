# 課題が終わったらほめてくれるbot

課題が終わった時にほめてくれるbotです。

## 必要要件

- Node.js v18以降
- Discordアカウントと Discord Developers Portal の登録

## セットアップ

### 1. 必要モジュールをインストールする

このbotを起動するには、`Discord.js`と`dotenv`モジュールが必要です。それぞれインストールしてください。

```
npm init
npm install discord.js
npm install dotenv
```

### 2. .env ファイルを作成
`main.js`と同じディレクトリに`.env`ファイルを作成し、下記の様にに Discord Bot のトークンを記録してください。

```env
DISCORD_TOKEN=ボットトークン
```

### 3. Botを起動する

下記コマンドを実行するとbotが起動します。終了するまでの間、botはメッセージに応答します。
```
node main.js
```

## 使い方

botが参加したサーバー内で、"課題終わった"を含むメッセージを送信すると、botがほめてくれます。
なお、botには下記の権限が必要です。

- チャンネルを見る
- メッセージを送信

## ライセンス
このプロジェクトは MIT License のもとで公開されています。