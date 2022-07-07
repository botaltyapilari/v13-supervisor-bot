const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");

module.exports = {
    name: 'avatar',
    aliases: ["av", "pp"],
  
    execute: async (client, message, args, embed, author, channel, guild) => {
	if (!message.guild) return;
    let user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
    message.reply({ content: `${user} ${user.displayAvatarURL({ dynamic: true, size: 4096 })}`}) 
}
}

