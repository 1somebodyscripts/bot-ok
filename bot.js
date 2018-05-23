const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('YEAAAAAAAAAA BOT ON');
	  client.user.setPresence({
      game: {
        name: 'osu!',
        type: 0
      }
  });
});

client.login(process.env.BOT_TOKEN);
