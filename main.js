const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const compliments = [
    "休憩していいよ！その価値がある！☕",
    "その努力、見てたよ。ほんとにえらい🐯",
    "提出していいよ！その価値がある！📄",
    "麻雀していいよ！その価値がある！🀄",
    "睡眠していいよ！その価値がある！🛏️",
    "ゲームしていいよ！その価値がある🎮",
    "カラオケ行っていいよ！その価値がある🎤"
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const content = message.content.trim();

  if (content.includes("課題終わった")) {
    const reply = compliments[Math.floor(Math.random() * compliments.length)];
    message.reply(reply);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
