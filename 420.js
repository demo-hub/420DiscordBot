require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

setInterval(function() {
    client.login(process.env.BOT_TOKEN);

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);

        var currentDate = new Date();

        var hour = currentDate.getHours();

        var minute = currentDate.getMinutes();

        var guild = client.guilds.get(process.env.GUILD_TOKEN);

        if (guild) {
            var channel = guild.channels.get(process.env.CHANNEL_TOKEN);

            if (channel) {
                channel.send("Faz o ece").then(() => client.destroy());
            } else {
                console.log("Couldn't get channel");
            }
        } else {
            console.log("Couldn't get guild");
        }

    });
}, 60000)

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    var guild = client.guilds.get(process.env.GUILD_TOKEN);

    if (guild) {
        var channel = guild.channels.get(process.env.CHANNEL_TOKEN);

        if (channel) {
            channel.send("Faz o ece").then(() => client.destroy());
        } else {
            console.log("Couldn't get channel");
        }
    } else {
        console.log("Couldn't get guild");
    }

});