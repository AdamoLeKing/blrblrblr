require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

client.on("messageCreate", async (message) => {
   if (message.author.bot) return;

   const rand = getRandomInt(1);

   if (message.author.id === process.env.TARGET_USER_ID && rand === 0 && message.channelId === process.env.TARGET_CHANNEL_ID) {
      console.log(rand);
      message.reply({ files: ["./videos/blrblrblr.mp4"] });
   }
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);

