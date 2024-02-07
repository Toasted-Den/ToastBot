// ToastBot version 1.02 - discord.js version 13.0.0

// Start
const { readdirSync } = require('fs');

const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MEMBERS" ] });


const prefix = '!';
const fs = require('fs');
const { send } = require('process');
const { Console } = require('console');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

// Executions on startup
client.once('ready', () => 
{
    console.log('ToastBot is online');

    // Jar Thread
        client.channels.fetch('923399499857166356')
        .then(channel => {
            channel.send("Jar Thread.");
        })

        setInterval(function() {
            client.channels.fetch('923399499857166356')
            .then(channel => {
                channel.send("Jar Thread.");
            })
        }, 86000 * 1000);


    // Ensure bot status refreshes every hour
    setInterval(function()
    {
        client.user.setActivity("Toasted Den Videos", { type: "WATCHING" })
    }, 3600 * 1000);

    // Set status to "Watching Toasted Den Videos"
    client.user.setActivity("Toasted Den Videos", { type: "WATCHING" })
});

client.on("guildMemberAdd", member  => {
    // Pick a random number that will determine the users welcome message in the #welcome channel.
    let welcomeMessage = Math.floor((Math.random() * 39) + 1);

    /*#welcome channel const */    const sendChannel = member.guild.channels.cache.get('1048718163610701906');
    /*#bot-logs channel const */  const logChannel = member.guild.channels.cache.get('904137214965981255');

    // Check to make sure we're sending in #welcome channel
    if (sendChannel){
        // Welcome Messages
        if (welcomeMessage == 1){
            sendChannel.send('<@' + member.user + "> is here!");
        }
        else if (welcomeMessage == 2){
            sendChannel.send('Welcome to the club <@' + member.user + ">!");
        }
        else if (welcomeMessage == 3){
            sendChannel.send('Welcome to the party <@' + member.user + ">!");
        }
        else if (welcomeMessage == 4){
            sendChannel.send("Stop! What's that sound? Wait nevermind, it's just <@" + member.user + ">.");
        }
        else if (welcomeMessage == 5){
            sendChannel.send("Salutations <@" + member.user + ">!");
        }
        else if (welcomeMessage == 6){
            sendChannel.send("<@" + member.user + "> just dropped in from orbit!");
        }
        else if (welcomeMessage == 7){
            sendChannel.send("Welcome to downtown Coolsville <@" + member.user + ">.");
        }
        else if (welcomeMessage == 8){
            sendChannel.send("We've been expecting you <@" + member.user + ">...");
        }
        else if (welcomeMessage == 9){
            sendChannel.send("Lock and load people, <@" + member.user + "> just showed up.");
        }
        else if (welcomeMessage == 10){
            sendChannel.send("Took you long enough <@" + member.user + ">...");
        }
        else if (welcomeMessage == 11){
            sendChannel.send("Woah, you finally arrived <@" + member.user + ">.");
        }
        else if (welcomeMessage == 12){
            sendChannel.send("Slow down, I see a wild <@" + member.user + "> in the distance.");
        }
        else if (welcomeMessage == 13){
            sendChannel.send("Make yourself at home <@" + member.user + ">.");
        }
        else if (welcomeMessage == 14){
            sendChannel.send("Stay a while <@" + member.user + ">.");
        }
        else if (welcomeMessage == 15){
            sendChannel.send("<@" + member.user + "> just pulled up in their 2022 Lamborghini Aventador LP 780-4 Ultimae Roadster");
        }
        else if (welcomeMessage == 16){
            sendChannel.send("Wake the fuck up <@" + member.user + ">, we got a city to burn!");
        }
        else if (welcomeMessage == 17){
            sendChannel.send("You've made it <@" + member.user + ">.");
        }
        else if (welcomeMessage == 18){
            sendChannel.send("We got a job to do, <@" + member.user + ">.");
        }
        else if (welcomeMessage == 19){
            sendChannel.send("Welcome to the Aperture Science Enrichment Center <@" + member.user + ">.");
        }
        else if (welcomeMessage == 20){
            sendChannel.send("Have you ever wondered why we're here <@" + member.user + ">?");
        }
        else if (welcomeMessage == 21){
            sendChannel.send("Welcome to the jungle <@" + member.user + ">!");
        }
        else if (welcomeMessage == 22){
            sendChannel.send("It's <@" + member.user + ">!");
        }
        else if (welcomeMessage == 23){
            sendChannel.send("Hit the deck, it's <@" + member.user + ">!");
        }
        else if (welcomeMessage == 24){
            sendChannel.send("Somebody get <@" + member.user + "> a drink!");
        }
        else if (welcomeMessage == 25){
            sendChannel.send("You've chosen to spend your life in sin and misery <@" + member.user + ">, in the house of The Rising Sun.");
        }
        else if (welcomeMessage == 26){
            sendChannel.send("<@" + member.user + "> just appeared through a slipspace portal.");
        }
        else if (welcomeMessage == 27){
            sendChannel.send("Good to see you, <@" + member.user + ">.");
        }
        else if (welcomeMessage == 28){
            sendChannel.send("Support has arrived! It's <@" + member.user + ">!");
        }
        else if (welcomeMessage == 29){
            sendChannel.send("Reinforcements have arrived! It's <@" + member.user + ">!");
        }
        else if (welcomeMessage == 30){
            sendChannel.send("<@" + member.user + "> dug straight down and landed in ther server.");
        }
        else if (welcomeMessage == 31){
            sendChannel.send("Paint me yellow and call me sunshine, It's <@" + member.user + ">!");
        }
        else if (welcomeMessage == 32){
            sendChannel.send("Hey <@" + member.user + ">, you're finally awake. You were trying to cross the border, right?");
        }
        else if (welcomeMessage == 33){
            sendChannel.send("<@" + member.user + "> just clocked in.");
        }
        else if (welcomeMessage == 34){
            sendChannel.send("Welcome to the wild-wild west <@" + member.user + ">.");
        }
        else if (welcomeMessage == 35){
            sendChannel.send("Stop! What's that sound <@" + member.user + ">?");
        }
        else if (welcomeMessage == 36) {
            sendChannel.send("*Sic Mundus Creatus Est <@" + member.user + ">.*");
        }
        else if (welcomeMessage == 37){
            sendChannel.send("Hello, friend <@" + member.user + ">.");
        }
        else if (welcomeMessage == 38){
            sendChannel.send("I need your clothes, your boots, and your motocycle <@" + member.user + ">.");
        }
        else{
            sendChannel.send("Welcome <@" + member.user + ">.");
        }

        // Send message in #bot-logs that a user has joined the server.
        logChannel.send('<@' + member.user + "> just joined.");
    }
    else{
        return;
    }

  });
  

// Listen for a message creation event.
client.on('messageCreate', message =>
{
    //Check if message does NOT start with the "!" Prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Don't allow commands to be used in the #quarantined channel.
    if (message.channel.id === '935337487495213057') {
		return;
    }

    // Ban - Ban a targeted user, can be given custom reasoning.
    else if (command === "ban"){
        client.commands.get('ban').execute(message, args);
    }
    // Clean select number of messages
    else if (command === "clean"){
        client.commands.get('cleam').execute(message, args);
    }
    // Clear - Clear select user from quarantine
    else if (command === "clearMod" || command === "cm" || command === "clearMod"){
        client.commands.get('clearMod').execute(message, args);
    }
    else if (command === "clear" || command === "c"){
        client.commands.get('clear').execute(message, args);
    }
    // Help
    else if (command === "help")
    {
        client.commands.get('help').execute(message, args);
    }
    // Kick - kick out a target user from the server, can be given a custom reason.
    else if (command === "kick"){
        client.commands.get('kick').execute(message, args);
    }
    // Kill
    else if (command === "kill"){
        client.commands.get('kill').execute(message, args);
    }
    // Mute
    else if (command === "mute"){
        client.commands.get('mute').execute(message, args);
    }
    // Ping
    if(command === 'ping'){
        client.commands.get('pinged').execute(message, args);
    }
    // Quarantine
    else if (command === "quarantine" || command === "q"){
        client.commands.get('quarantine').execute(message, args);
    }
    // Silence
    else if (command === "silence" || command === "s"){
        client.commands.get('silence').execute(message, args);
    }
    // Slap
    else if (command === "slap"){
        client.commands.get('slapped').execute(message, args);
    }
    // Unmute
    else if (command === "unmute"){
        client.commands.get('unmute').execute(message, args);
    }
});

// Disabled commands:

    // Temporaily disabling this one because I don't think it works.

    // Suicide command
    // else if (command === "suicide"){
    //     client.commands.get('suicide').execute(message, args);
    // }

    // death.js


// Login
client.login(process.env.TOKEN);