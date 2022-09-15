const { Client,GatewayIntentBits, Collection, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const {token} = require('./config.json');
const fetch = require('node-fetch')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const prefix = '/';

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message) => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//message array

	const messageArray = message.content.split(" ");
	const argument = messageArray.slice(1);
	const cmd = messageArray[0];

	//COMMANDS

	if (command === 'kanye') {
		message.channel.send('what the fuck does she know about cameras')
	}
})

fetch('https://api.kanye.rest', {
  method: 'POST',
  body: 'a=1'
})
  .then(res => res.json())
  .then((data) => console.log(data))
  .catch(err => console.log(err));

// Login to Discord with your client's token
client.login(token);