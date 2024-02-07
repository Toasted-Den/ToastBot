const discord = require("discord.js");
const colors = require('colors');
module.exports =
{
    // Reply with "pong!"
    name: 'pinged',
    description: "this is a ping command!",
    execute(message, args) {
        auth = message.author;
        channel = message.channel.id;

        message.channel.send('pong!');

        console.log(" ".white);
        console.log('PING:'.yellow);
        console.log("Timestamp: " + new Date() + "".white);
        console.log(auth + " called the Ping command.".white);
        console.log("In Channel: " + channel + "".white);
        console.log("SUCCESS".green);
    }
}