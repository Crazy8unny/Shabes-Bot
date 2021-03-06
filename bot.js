var Discord = require('discord.io');
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
	
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'Shabes':
				bot.sendMessage({
					to: channelID,
					message: 'וואלה אני סתם אפס כרגע שלא עושה כלום כזה'
				});
            break;
            case 'shabes':
				bot.sendMessage({
					to: channelID,
					message: 'וואלה אני סתם אפס כרגע שלא עושה כלום כזה'
				});
            break;
			case 'link':
				bot.sendMessage({
					to: channelID,
					message: 'https://discordapp.com/oauth2/authorize?client_id=408977575180763139&scope=bot&permissions=0'
				});
            break;
			case 'Ping':
				bot.sendMessage({
					to: channelID,
					message: 'Pong!'
				});
            break;
			default: 
				break;
            // Just add any case commands if you want to..
         }
     }
});
