
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`🤖 Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('!ask')) {
        const prompt = message.content.replace('!ask', '').trim();
        message.reply('🧠 Đang suy nghĩ... (demo bot AI)');
    }
});

client.login(process.env.TOKEN);
